(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/brainbridge/app/redux/api/apiSlice.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiSlice",
    ()=>apiSlice,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const baseUrl = ("TURBOPACK compile-time value", "http://localhost:8081") || 'http://localhost:8081';
const baseQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
    baseUrl,
    prepareHeaders: (headers)=>{
        const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        if (!headers.has('content-type')) {
            headers.set('content-type', 'application/json');
        }
        return headers;
    }
});
const apiSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'api',
    baseQuery,
    tagTypes: [
        'User',
        'Projects',
        'Articles',
        'Article',
        'ArticleLikes',
        'ArticleComments',
        'Comments',
        'Favorites',
        'Messages',
        'Notifications'
    ],
    endpoints: (builder)=>({})
});
const __TURBOPACK__default__export__ = apiSlice;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/brainbridge/app/redux/api/Features/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$apiSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/app/redux/api/apiSlice.jsx [app-client] (ecmascript)");
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$apiSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$apiSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$apiSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].middleware)
});
const __TURBOPACK__default__export__ = store;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/brainbridge/app/redux/ProviderClient.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$Features$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/app/redux/api/Features/store.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$Features$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/brainbridge/app/redux/ProviderClient.jsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = ReduxProvider;
var _c;
__turbopack_context__.k.register(_c, "ReduxProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/brainbridge/app/components/providers/WebSocketProvider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSocketProvider",
    ()=>WebSocketProvider,
    "useWebSocket",
    ()=>useWebSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$sockjs$2d$client$2f$lib$2f$entry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/sockjs-client/lib/entry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$stomp$2f$stompjs$2f$bundles$2f$stomp$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/@stomp/stompjs/bundles/stomp.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$apiSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/brainbridge/app/redux/api/apiSlice.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const WebSocketContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useWebSocket = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WebSocketContext);
};
_s(useWebSocket, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const WebSocketProvider = ({ children })=>{
    _s1();
    const [stompClient, setStompClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebSocketProvider.useEffect": ()=>{
            const token = localStorage.getItem("token");
            const userStr = localStorage.getItem("user");
            if (!token || !userStr) return;
            try {
                const user = JSON.parse(userStr);
                console.log("Initializing WebSocket for user:", user.username);
                const socket = new __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$sockjs$2d$client$2f$lib$2f$entry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("http://localhost:8080/ws");
                const client = __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f40$stomp$2f$stompjs$2f$bundles$2f$stomp$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stomp"].over(socket);
                client.debug = ({
                    "WebSocketProvider.useEffect": ()=>{}
                })["WebSocketProvider.useEffect"]; // Disable debug logs
                const connectHeaders = {
                    Authorization: `Bearer ${token}`
                };
                client.connect(connectHeaders, {
                    "WebSocketProvider.useEffect": (frame)=>{
                        console.log("Connected to WebSockets");
                        setStompClient(client);
                        // Listen for global notifications
                        client.subscribe("/user/queue/notifications", {
                            "WebSocketProvider.useEffect": (message)=>{
                                if (message.body) {
                                    const notification = JSON.parse(message.body);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(`${notification.title}\n${notification.body}`, {
                                        duration: 5000
                                    });
                                    // Tell Redux to fetch new notification data
                                    dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$apiSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].util.invalidateTags([
                                        'Notifications'
                                    ]));
                                }
                            }
                        }["WebSocketProvider.useEffect"]);
                        // Listen for real-time messages
                        client.subscribe("/user/queue/messages", {
                            "WebSocketProvider.useEffect": (message)=>{
                                if (message.body) {
                                    const msg = JSON.parse(message.body);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(`New Message from ${msg.senderUsername}`);
                                    // Wait, we need to dispatch an api endpoint update for RTK query here if needed
                                    // For example, if project log is open:
                                    if (msg.projectId) {
                                        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$apiSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].util.invalidateTags([
                                            {
                                                type: 'Message',
                                                id: 'LIST'
                                            }
                                        ]));
                                    } else {
                                        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$app$2f$redux$2f$api$2f$apiSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiSlice"].util.invalidateTags([
                                            {
                                                type: 'Message',
                                                id: 'INBOX'
                                            }
                                        ]));
                                    }
                                }
                            }
                        }["WebSocketProvider.useEffect"]);
                    }
                }["WebSocketProvider.useEffect"], {
                    "WebSocketProvider.useEffect": (error)=>{
                        console.log("WebSocket connection error:", error);
                    }
                }["WebSocketProvider.useEffect"]);
                return ({
                    "WebSocketProvider.useEffect": ()=>{
                        if (client.connected) {
                            client.disconnect();
                        }
                    }
                })["WebSocketProvider.useEffect"];
            } catch (e) {
                console.error(e);
            }
        }
    }["WebSocketProvider.useEffect"], [
        dispatch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebSocketContext.Provider, {
        value: {
            stompClient
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-right"
            }, void 0, false, {
                fileName: "[project]/brainbridge/app/components/providers/WebSocketProvider.jsx",
                lineNumber: 85,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/brainbridge/app/components/providers/WebSocketProvider.jsx",
        lineNumber: 84,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(WebSocketProvider, "dQejfEj2bvj/cNvJDIv4v/KG8DA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$brainbridge$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = WebSocketProvider;
var _c;
__turbopack_context__.k.register(_c, "WebSocketProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=brainbridge_app_d6698397._.js.map