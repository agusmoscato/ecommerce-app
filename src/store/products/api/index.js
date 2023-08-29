import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase';

// Definición de la API de productos
export const productsApi = createApi({
  reducerPath: 'productsApi', // Ruta para el reductor de la API
  baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }), // Consulta base con URL base
  endpoints: (builder) => ({
    // Endpoint para obtener productos por categoría
    getProductsByCategory: builder.query({
      query: (categoryId) => `/productos.json?orderBy="categoryId"&equalTo=${categoryId}`,
      transformResponse: (response) =>
        // Transformación de la respuesta para mapear los productos
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
    }),
    // Endpoint para obtener un producto por su ID
    getProductById: builder.query({
      query: (productId) => `/productos.json?orderBy="id"&equalTo=${productId}`,
      transformResponse: (response) =>
        // Transformación de la respuesta para mapear el producto
        Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        })),
    }),
  }),
});

// Exportación de los hooks generados por la API de productos
export const { useGetProductsByCategoryQuery, useGetProductByIdQuery } = productsApi;
