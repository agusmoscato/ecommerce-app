import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import {
  FIREBASE_AUTH_BASE_URL,
  FIREBASE_AUTH_SING_IN_URL_API,
  FIREBASE_AUTH_REGISTER_URL_API,
} from '../../../constants/firebase/index';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_AUTH_BASE_URL }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials) => ({
        url: FIREBASE_AUTH_SING_IN_URL_API,
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation({
      query: (credentials) => ({
        url: FIREBASE_AUTH_REGISTER_URL_API,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;