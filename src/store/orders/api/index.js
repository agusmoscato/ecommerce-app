import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase';

/**
 * API para gestionar órdenes.
 */
export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
  tagTypes: ['Ordenes'],
  endpoints: (builder) => ({
    /**
     * Crea una nueva orden.
     */
    createOrder: builder.mutation({
      query: (order) => ({
        url: `/ordenes.json`,
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['Ordenes'],
    }),
    /**
     * Obtiene las órdenes de un usuario en específico.
     */
    getOrdersByUser: builder.query({
      query: (localId) => `/ordenes.json?orderBy="userId"&equalTo="${localId}"`,
      transformResponse: (response) => {
        if (!response) return [];
        return Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
      },
      providesTags: ['Ordenes'],
    }),
    /**
     * Obtiene una orden por su ID.
     */
    getOrderById: builder.query({
      query: (orderId) => `/ordenes.json?orderBy="id"&equalTo=${orderId}`,
      transformResponse: (response) =>
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
    }),
  }),
});

/**
 * Mutaciones y consultas generadas por la API de órdenes.
 */
export const {
  useCreateOrderMutation,
  useGetOrdersByUserQuery,
  useGetOrderByIdQuery,
} = ordersApi;
