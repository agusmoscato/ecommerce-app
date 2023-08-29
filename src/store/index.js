import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./categories/categoriesSlice";
import cartReducer from './cart/cartSlice';
import authReducer from "./auth/authSlice";
import { categoriesApi } from "./categories/api";
import { productsApi } from "./products/api";
import { ordersApi } from "./orders/api";
import { authApi } from "./auth/api";
import { settingsApi } from "./settings/api";

// Configuración y creación de la tienda Redux

// Reductores
// Aquí se definen los reductores que formarán parte del estado global de la aplicación.
const reducers = {
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  auth: authReducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [settingsApi.reducerPath]: settingsApi.reducer,
};

// Middleware
// Aquí se configura el middleware que se aplicará a la tienda Redux.
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    categoriesApi.middleware,
    productsApi.middleware,
    ordersApi.middleware,
    authApi.middleware,
    settingsApi.middleware
  );

// Configuración y creación de la tienda
export const store = configureStore({
  reducer: reducers,
  middleware: middleware,
});

// Configuración de oyentes para solicitudes
// Esto configura los oyentes para las solicitudes generadas por las API de Redux Toolkit Query.
setupListeners(store.dispatch);
