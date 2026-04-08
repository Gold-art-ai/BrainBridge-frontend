"use client";

import { createContext, useContext, useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { apiSlice } from "../../redux/api/apiSlice";

const WebSocketContext = createContext(null);

export const useWebSocket = () => {
    return useContext(WebSocketContext);
};

export const WebSocketProvider = ({ children }) => {
    const [stompClient, setStompClient] = useState(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        const userStr = localStorage.getItem("user");
        
        if (!token || !userStr) return;
        
        try {
            const user = JSON.parse(userStr);
            console.log("Initializing WebSocket for user:", user.username);
            
            const socket = new SockJS("http://localhost:8080/ws");
            const client = Stomp.over(socket);
            
            client.debug = () => {}; // Disable debug logs

            const connectHeaders = {
                Authorization: `Bearer ${token}`
            };

            client.connect(connectHeaders, (frame) => {
                console.log("Connected to WebSockets");
                setStompClient(client);

                // Listen for global notifications
                client.subscribe("/user/queue/notifications", (message) => {
                    if (message.body) {
                        const notification = JSON.parse(message.body);
                        toast.success(`${notification.title}\n${notification.body}`, { duration: 5000 });
                        
                        // Tell Redux to fetch new notification data
                        dispatch(apiSlice.util.invalidateTags(['Notifications']));
                    }
                });

                // Listen for real-time messages
                client.subscribe("/user/queue/messages", (message) => {
                    if (message.body) {
                        const msg = JSON.parse(message.body);
                        toast.success(`New Message from ${msg.senderUsername}`);
                        
                        // Wait, we need to dispatch an api endpoint update for RTK query here if needed
                        // For example, if project log is open:
                        if (msg.projectId) {
                            dispatch(apiSlice.util.invalidateTags([{ type: 'Message', id: 'LIST' }]));
                        } else {
                            dispatch(apiSlice.util.invalidateTags([{ type: 'Message', id: 'INBOX' }]));
                        }
                    }
                });
            }, (error) => {
                console.log("WebSocket connection error:", error);
            });

            return () => {
                if (client.connected) {
                    client.disconnect();
                }
            };
        } catch (e) {
            console.error(e);
        }
    }, [dispatch]);

    return (
        <WebSocketContext.Provider value={{ stompClient }}>
            <Toaster position="top-right" />
            {children}
        </WebSocketContext.Provider>
    );
};
