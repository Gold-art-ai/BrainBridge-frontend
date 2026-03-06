import apiSlice from './apiSlice'

export const userApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: credentials
      })
    }),
    register: builder.mutation({
      query: user => ({
        url: '/register',
        method: 'POST',
        body: user
      })
    }),
    getProfile: builder.query({
      query: () => ({ url: '/user/me' }),
      providesTags: ['User']
    })
  }),
  overrideExisting: false
})

export const { useLoginMutation, useRegisterMutation, useGetProfileQuery } = userApi
