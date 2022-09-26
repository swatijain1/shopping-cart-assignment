import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformResponse } from "../utils/transform";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
      transformResponse,
    }),
    getBanners: builder.query({
      query: () => "/banners",
      transformResponse,
    }),
    getProducts: builder.query({
      query: () => "/products",
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: "/addToCart",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetBannersQuery,
  useGetProductsQuery,
  useAddToCartMutation,
} = apiSlice;

export default apiSlice;
