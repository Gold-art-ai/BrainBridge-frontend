import apiSlice from './apiSlice'

export const favoritesApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMyFavorites: builder.query({
      query: () => ({ url: '/api/favorites' }),
      providesTags: ['Favorites']
    }),
    addFavorite: builder.mutation({
      query: projectId => ({ url: `/api/favorites/${projectId}`, method: 'POST' }),
      invalidatesTags: ['Favorites']
    }),
    removeFavorite: builder.mutation({
      query: projectId => ({ url: `/api/favorites/${projectId}`, method: 'DELETE' }),
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
