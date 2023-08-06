import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
  tagTypes: ['Ordenes'],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: `/ordenes.json`,
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['Ordenes'],
    }),
    getOrders: builder.query({
      query: () => `/ordenes.json`,
      transformResponse: (response) => {
        if (!response) return [];
        return Object?.keys(response)?.map((key) => ({
          id: key,
          ...response[key],
        }));
      },
      providesTags: ['Ordenes'],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = ordersApi;