import apiSlice from './apiSlice'

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    sendMessage: builder.mutation({
      query: message => ({ url: '/messages/send', method: 'POST', body: message }),
      invalidatesTags: ['Messages', 'Notifications']
    }),
    getInbox: builder.query({
      query: () => ({ url: '/messages/inbox' }),
      providesTags: ['Messages']
    }),
    getProjectLog: builder.query({
      query: id => ({ url: `/messages/project/${id}` }),
      providesTags: ['Messages']
    }),
    getNotifications: builder.query({
      query: () => ({ url: '/notifications' }),
      providesTags: ['Notifications']
    }),
    getUnreadNotificationCount: builder.query({
      query: () => ({ url: '/notifications/unread-count' }),
      providesTags: ['Notifications']
    }),
    markNotificationAsRead: builder.mutation({
      query: id => ({ url: `/notifications/read/${id}`, method: 'POST' }),
      invalidatesTags: ['Notifications']
    }),
  }),
  overrideExisting: false,
})

export const {
  useSendMessageMutation,
  useGetInboxQuery,
  useGetProjectLogQuery,
  useGetNotificationsQuery,
  useGetUnreadNotificationCountQuery,
  useMarkNotificationAsReadMutation,
} =
 messagesApi
