import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryProducts: builder.query({
      query: ({ category }) => ({
        url: `/products/category`,
        method: "GET",
        params: { category },
      }),
    }),
    getAllProducts: builder.query({
      query: ({ limit, page }) => ({
        url: `/products/all/products`,
        method: "GET",
        params: { limit, page },
      }),
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    createProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/products/create-product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (productInfo) => ({
        url: `/products/${productInfo.id}`,
        method: "PUT",
        body: productInfo.data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetCategoryProductsQuery,
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation
} = categoryApi;
