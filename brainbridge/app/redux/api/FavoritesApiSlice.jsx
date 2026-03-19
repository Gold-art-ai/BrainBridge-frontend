import apiSlice from './apiSlice'

export const favoritesApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMyFavorites: builder.query({
      query: () => ({ url: '/api/favorites' }),
      providesTags: ['Favorites']
    }),
    addFavorite: builder.mutation({
      query: projectId => ({ url: `/api/favorites/${projectId}`, method: 'POST' }),
      transformResponse: (response, meta) => response, // backend returns plain text
      async onQueryStarted(_, { queryFulfilled }) { try { await queryFulfilled } catch {} },
      extraOptions: { responseHandler: 'text' },
      invalidatesTags: ['Favorites']
    }),
    removeFavorite: builder.mutation({
      query: projectId => ({ url: `/api/favorites/${projectId}`, method: 'DELETE' }),
      extraOptions: { responseHandler: 'text' },
      invalidatesTags: ['Favorites']
    }),
    checkFavorite: builder.query({
      query: projectId => ({ url: `/api/favorites/${projectId}/check` }),
      providesTags: ['Favorites']
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetMyFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
  useCheckFavoriteQuery,
} = favoritesApi
