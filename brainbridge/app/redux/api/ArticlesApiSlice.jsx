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
    getArticleById: builder.query({
      query: (id) => ({ url: `/articles/fetch/${id}` }),
      providesTags: ['Articles']
    }),
    removeArticle: builder.mutation({
      query: (id) => ({ url: `/articles/remove/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Articles']
    }),
    updateArticle: builder.mutation({
      query: (article) => ({ url: '/articles/update', method: 'PUT', body: article }),
      invalidatesTags: ['Articles']
    }),
  }),
  overrideExisting: false,
})

export const {
  useAddArticleMutation,
  useGetAllArticlesQuery,
  useGetMyArticlesQuery,
  useGetArticleByIdQuery,
  useRemoveArticleMutation,
  useUpdateArticleMutation,
} = articlesApi
