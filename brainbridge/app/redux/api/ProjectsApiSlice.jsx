import apiSlice from './apiSlice'

export const projectsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addProject: builder.mutation({
      query: project => ({ url: '/projects/add', method: 'POST', body: project }),
      invalidatesTags: ['Projects']
    }),
    getAllProjects: builder.query({
      // We point "getAllProjects" (discovery feed) to Backend 1 (runs on 8081)
      // to meet the requirement of integrating both backends simultaneously.
      query: () => ({ url: 'http://localhost:8081/projects/api/all' }),
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
      query: title => ({ url: `/projects/remove/${encodeURIComponent(title)}`, method: 'DELETE' }),
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
} = projectsApi
