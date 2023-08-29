import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase';

/**
 * API de Categorías
 *
 * Esta API permite realizar consultas para obtener categorías desde la base de datos.
 */
export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
  endpoints: (builder) => ({
    /**
     * Obtener Categorías
     *
     * Esta consulta permite obtener una lista de categorías desde la base de datos.
     *
     * @returns {Array} Lista de categorías.
     */
    getCategories: builder.query({
      query: () => `/categorias.json`,
    }),
  }),
});

// Exportar consulta específica para obtener categorías
export const { useGetCategoriesQuery } = categoriesApi;
