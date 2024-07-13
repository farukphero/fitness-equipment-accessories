import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fitness-accessories-server-flame.vercel.app/api/v1",
  }),
  tagTypes: ["product", "cart", "order"],
  endpoints: () => ({}),
});
