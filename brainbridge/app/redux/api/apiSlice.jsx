import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081'

const baseQuery = fetchBaseQuery({ 
  baseUrl,
  prepareHeaders: (headers) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    if (!headers.has('content-type')) {
      headers.set('content-type', 'application/json');
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['User', 'Projects', 'Articles', 'Article', 'ArticleLikes', 'ArticleComments', 'Comments', 'Favorites', 'Messages', 'Notifications'],
  endpoints: builder => ({
    
  })
})

export default apiSlice;
