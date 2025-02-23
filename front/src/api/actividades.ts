import { Actividad } from "../interfaces/actividades";
import { microserviceApi } from "./microserviceApi";
import { TAGS } from "./tags";

export const actividadesApiRtk = microserviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getActividades: builder.query<Actividad[], void>({
      query: () => ({
        url: `/findAll`,
        method: "GET",
      }),
      providesTags: (result) =>
        result ? [...result.map(({ _id }) => ({ type: TAGS.GETACTIVIDADES, _id })), TAGS.GETACTIVIDADES] : [TAGS.GETACTIVIDADES],
    }),

    getActividadById: builder.query<Actividad, { id: string }>({
      query: (request) => ({
        url: `/findOne`,
        method: "POST",
        body: request,
      }),
      providesTags: (_result, _error, arg) => [{ type: TAGS.GETACTIVIDADES, id: arg.id }],
    }),

    createActividad: builder.mutation<Actividad, Actividad>({
      query: (data) => ({
        url: `/createOne`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [TAGS.GETACTIVIDADES],
    }),

    updateActividad: builder.mutation<Actividad, Partial<Actividad>>({
      query: (data) => ({
        url: `/updateOne`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, arg) => [{ type: TAGS.GETACTIVIDADES, id: arg._id }, TAGS.GETACTIVIDADES],
    }),

    deleteActividad: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/deleteOne`, 
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (_result, _error, id) => [{ type: TAGS.GETACTIVIDADES, id }, TAGS.GETACTIVIDADES],
    }),
  }),
});

export const {
  useGetActividadesQuery,
  useGetActividadByIdQuery,
  useCreateActividadMutation,
  useUpdateActividadMutation,
  useDeleteActividadMutation,
} = actividadesApiRtk;
