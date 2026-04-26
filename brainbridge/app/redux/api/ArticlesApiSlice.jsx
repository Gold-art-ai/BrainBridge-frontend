import apiSlice from './apiSlice'

export const articlesApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addArticle: builder.mutation({
      query: article => ({ url: '/articles/add', method: 'POST', body: article }),
      invalidatesTags: ['Articles', 'Article']
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
      providesTags: (result, error, id) => (id ? [{ type: 'Article', id }, 'Articles'] : ['Articles'])
    }),
    removeArticle: builder.mutation({
      query: (id) => ({ url: `/articles/remove/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, id) => (id ? ['Articles', { type: 'Article', id }] : ['Articles'])
    }),
    updateArticle: builder.mutation({
      query: (article) => ({ url: '/articles/update', method: 'PUT', body: article }),
      invalidatesTags: (result, error, article) => {
        const id = article?.id;
        return id ? ['Articles', { type: 'Article', id }] : ['Articles'];
      }
    }),

    getArticleLikeStatus: builder.query({
      query: (id) => ({ url: `/articles/${id}/likes` }),
      providesTags: (result, error, id) => (id ? [{ type: 'ArticleLikes', id }] : [])
    }),
    toggleArticleLike: builder.mutation({
      query: (id) => ({ url: `/articles/${id}/likes/toggle`, method: 'POST' }),
      invalidatesTags: (result, error, id) => (id ? [{ type: 'ArticleLikes', id }, { type: 'Article', id }] : [])
    }),

    getArticleComments: builder.query({
      query: (id) => ({ url: `/articles/${id}/comments` }),
      providesTags: (result, error, id) => (id ? [{ type: 'ArticleComments', id }] : [])
    }),
    addArticleComment: builder.mutation({
      query: ({ id, content }) => ({ url: `/articles/${id}/comments`, method: 'POST', body: { content } }),
      invalidatesTags: (result, error, { id }) => (id ? [{ type: 'ArticleComments', id }, { type: 'Article', id }] : [])
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
  useGetArticleLikeStatusQuery,
  useToggleArticleLikeMutation,
  useGetArticleCommentsQuery,
  useAddArticleCommentMutation,
} = articlesApi
