import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: ({ limit, page }) => ({
        url: `/orders/order`,
        method: "GET",
        params: { limit, page },
      }),
      providesTags: ["order"],
    }),

    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/orders/order",
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["order"],
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,

  useDeleteOrderMutation,
} = orderApi;
