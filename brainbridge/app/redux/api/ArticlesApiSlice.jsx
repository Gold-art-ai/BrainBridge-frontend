import apiSlice from './apiSlice'

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addArticle: builder.mutation({
      query: article => ({ url: '/articles/add', method: 'POST', body: article }),
      invalidatesTags: ['Articles']
    }),
    getAllArticles: builder.query({
      query: () => ({ url: '/articles/all' }),
      providesTags: ['Articles']
    }),
    getMyArticles: builder.query({
      query: () => ({ url: '/articles/my' }),
      providesTags: ['Articles']
    }),
  }),
  overrideExisting: false,
})

export const {
  useAddArticleMutation,
  useGetAllArticlesQuery,
  useGetMyArticlesQuery,
} = articlesApi
