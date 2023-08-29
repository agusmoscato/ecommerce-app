import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import {
  FIREBASE_AUTH_BASE_URL,
  FIREBASE_AUTH_SING_IN_URL_API,
  FIREBASE_AUTH_REGISTER_URL_API,
} from '../../../constants/firebase/index';

/**
 * API de Autenticación
 * 
 * Esta API se utiliza para realizar operaciones de inicio de sesión y registro de usuarios
 */
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_AUTH_BASE_URL }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    /**
     * Realiza una petición para iniciar sesión con las credenciales proporcionadas.
     * @param {object} credentials - Las credenciales de inicio de sesión del usuario.
     * @returns {object} - Resultado de la petición de inicio de sesión.
     */
    signIn: builder.mutation({
      query: (credentials) => ({
        url: FIREBASE_AUTH_SING_IN_URL_API,
        method: 'POST',
        body: credentials,
      }),
    }),

    /**
     * Realiza una petición para registrar un nuevo usuario con las credenciales proporcionadas.
     * @param {object} credentials - Las credenciales de registro del usuario.
     * @returns {object} - Resultado de la petición de registro.
     */
    signUp: builder.mutation({
      query: (credentials) => ({
        url: FIREBASE_AUTH_REGISTER_URL_API,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

// Exporta los hooks generados automáticamente para las mutaciones de inicio de sesión y registro
export const { useSignInMutation, useSignUpMutation } = authApi;
