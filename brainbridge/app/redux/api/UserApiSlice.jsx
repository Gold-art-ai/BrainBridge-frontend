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
      query: () => ({ url: `${USERS_URL}/me` }),
      providesTags: ['User']
    }),
    uploadProfilePicture: builder.mutation({
      query: (formData) => ({
        url: `${USERS_URL}/me/profile-picture`,
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['User']
    }),
    verifyOTP: builder.mutation({
      query: ({ email, otp }) => ({
        url: `${USERS_URL}/verify-otp`,
        method: 'POST',
        body: { email, otp }
      })
    }),
    resendOTP: builder.mutation({
      query: ({ email }) => ({
        url: `${USERS_URL}/resend-otp`,
        method: 'POST',
        body: { email }
      })
    })
  }),
  overrideExisting: false
})

export const { useLoginMutation, useRegisterMutation, useGetProfileQuery, useUploadProfilePictureMutation, useVerifyOTPMutation, useResendOTPMutation } = userApi
