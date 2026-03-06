import apiSlice from './apiSlice'

export const projectsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addProject: builder.mutation({
      query: project => ({ url: '/projects/api/add', method: 'POST', body: project }),
      invalidatesTags: ['Projects']
    }),
    getAllProjects: builder.query({
      query: () => ({ url: '/projects/api/all' }),
      providesTags: ['Projects']
    }),
    getMyProjects: builder.query({
      query: () => ({ url: '/projects/api/my' }),
      providesTags: ['Projects']
    }),
    updateProject: builder.mutation({
      query: project => ({ url: '/projects/api/update', method: 'PUT', body: project }),
      invalidatesTags: ['Projects']
    }),
    getProjectById: builder.query({
      query: id => ({ url: `/projects/api/fetch/${id}` }),
      providesTags: ['Projects']
    }),
    getTeamProjects: builder.query({
      query: teamName => ({ url: `/projects/api/team/${teamName}` }),
      providesTags: ['Projects']
    }),
    removeProject: builder.mutation({
      query: title => ({ url: `/projects/api/remove/${encodeURIComponent(title)}`, method: 'DELETE' }),
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
