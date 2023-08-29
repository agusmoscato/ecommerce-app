import { createSlice } from '@reduxjs/toolkit';

// Estado inicial para el slice de autenticación
const initialState = {
  user: null, // Usuario inicialmente no autenticado
};

// Creación del slice de autenticación utilizando createSlice
const authSlice = createSlice({
  name: 'auth', // Nombre del slice
  initialState, // Estado inicial definido anteriormente
  reducers: {
    // Reductor para establecer el usuario autenticado en el estado
    setUser: (state, action) => {
      state.user = action.payload; // Establecer el usuario desde la acción recibida
    },
  },
});

// Exportar la acción de establecer usuario para su uso en otros lugares
export const { setUser } = authSlice.actions;

// Exportar el reductor del slice de autenticación
export default authSlice.reducer;
