import apiSlice from './apiSlice'

export const projectsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addProject: builder.mutation({
      query: project => ({ url: '/projects/add', method: 'POST', body: project }),
      invalidatesTags: ['Projects']
    }),
    getAllProjects: builder.query({
      query: () => ({ url: '/projects/all' }),
      providesTags: ['Projects']
    }),
    getMyProjects: builder.query({
      // User-specific endpoints hit Backend 2 (8080) because it implements User linkage
      query: () => ({ url: '/projects/my' }),
      providesTags: ['Projects']
    }),
    updateProject: builder.mutation({
      query: project => ({ url: '/projects/update', method: 'PUT', body: project }),
      invalidatesTags: ['Projects']
    }),
    getProjectById: builder.query({
      query: id => ({ url: `/projects/fetch/${id}` }),
      providesTags: ['Projects']
    }),
    getTeamProjects: builder.query({
      query: teamName => ({ url: `/projects/team/${teamName}` }),
      providesTags: ['Projects']
    }),
    removeProject: builder.mutation({
      query: id => ({ url: `/projects/remove/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Projects']
    }),
    incrementViewCount: builder.mutation({
      query: id => ({ url: `/projects/view/${id}`, method: 'POST' }),
      invalidatesTags: ['Projects']
    }),
  }),
  overrideExisting: false,
})

export const {
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useGetMyProjectsQuery,
  useUpdateProjectMutation,
  useGetProjectByIdQuery,
  useGetTeamProjectsQuery,
  useRemoveProjectMutation,
  useIncrementViewCountMutation,
} = projectsApi
