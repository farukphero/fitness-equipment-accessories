import { baseApi } from "./baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getCategoryProducts: builder.query({
    //   query: ({ category, searchTerm, sort, filter }) => ({
    //     url: `/products/category`,
    //     method: "GET",
    //     params: { category, searchTerm, sort, filter },
    //   }),
    // }),
    getAllCarts: builder.query({
      query: ({ limit, page }) => ({
        url: `/carts/cart`,
        method: "GET",
        params: { limit, page },
      }),
      providesTags: ["cart"],
    }),
    // getSingleProduct: builder.query({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["product"],
    // }),
    createCart: builder.mutation({
      query: (cartInfo) => ({
        url: "/carts/cart",
        method: "POST",
        body: cartInfo,
      }),
      invalidatesTags: ["cart"],
    }),
    updateCart: builder.mutation({
      query: (cartInfo) => ({
        url: `/carts/${cartInfo.id}`,
        method: "PUT",
        body: cartInfo.data,
      }),
      invalidatesTags: ["cart"],
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
//   useGetCategoryProductsQuery,
  useCreateCartMutation,
  useGetAllCartsQuery,
//   useGetSingleProductQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
