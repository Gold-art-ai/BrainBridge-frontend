import apiSlice from './apiSlice'

const USERS_URL = '/api/users';
export const userApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: credentials
      })
    }),
    register: builder.mutation({
      query: user => ({
        url: `${USERS_URL}/register`,
        method: 'POST',
        body: user
      })
    }),
    getProfile: builder.query({
      query: () => ({ url: `${USERS_URL}` }),
      providesTags: ['User']
    })
  }),
  overrideExisting: false
})

export const { useLoginMutation, useRegisterMutation, useGetProfileQuery } = userApi
