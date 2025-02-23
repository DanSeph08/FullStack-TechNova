import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TAGS } from "./tags";

export const microserviceApi = createApi({
  reducerPath: "microserviceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: () => ({}),
  tagTypes: Object.values(TAGS),
    // Object.values(TAG_TYPES_RTK_QUERY),
});