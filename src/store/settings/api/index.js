import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase';

/**
 * API de configuración para acceder y actualizar datos de perfil y cuenta de usuario.
 */
export const settingsApi = createApi({
  reducerPath: 'settingsApi', // Ruta en el store donde se almacenan los datos
  baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }), // Configuración de la base de la consulta
  tagTypes: ['Settings'], // Tipos de etiquetas para el sistema de caché
  endpoints: (builder) => ({
    /**
     * Consulta para obtener el perfil de usuario.
     * @param {Object} param - Parámetros de consulta.
     * @param {string} param.localId - ID local del usuario.
     */
    getProfile: builder.query({
      query: ({ localId }) => ({
        url: `/users/${localId}.json`,
        method: 'GET',
      }),
    }),
    /**
     * Mutación para actualizar la imagen de perfil de usuario.
     * @param {Object} param - Parámetros de la mutación.
     * @param {string} param.localId - ID local del usuario.
     * @param {string} param.image - URL de la imagen de perfil.
     */
    updateImageProfile: builder.mutation({
      query: ({ localId, image }) => ({
        url: `/users/${localId}.json`,
        method: 'PATCH',
        body: { profileImage: image },
      }),
    }),
    /**
     * Mutación para actualizar la información de la cuenta de usuario.
     * @param {Object} param - Parámetros de la mutación.
     * @param {string} param.localId - ID local del usuario.
     * @param {string} param.name - Nombre del usuario.
     * @param {string} param.surname - Apellido del usuario.
     * @param {string} param.address - Dirección del usuario.
     */
    updateAccount: builder.mutation({
      query: ({ localId, name, surname, address }) => ({
        url: `/users/${localId}.json`,
        method: 'PATCH',
        body: {
          name: name,
          surname: surname,
          address: address,
        },
      }),
    }),
  }),
});

// Exportar los hooks generados automáticamente por la API
export const {
  useGetProfileQuery,
  useUpdateImageProfileMutation,
  useUpdateAccountMutation,
} = settingsApi;
