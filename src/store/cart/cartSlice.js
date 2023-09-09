import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

// Estado inicial del carrito
const initialState = {
  items: [],
  total: 0,
};

// Definición del slice del carrito
const cartSlice = createSlice({
  name: 'cart', // Nombre del slice
  initialState, // Estado inicial
  reducers: {
    // Acción para agregar un producto al carrito
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      Alert.alert(
        'Producto Agregado',
        'Se ha agregado un producto al carrito.'
      );
      if (itemInCart && itemInCart.quantity < itemInCart.stock) {
        itemInCart.quantity += 1;
      } else if (!(itemInCart)||(itemInCart.quantity < itemInCart.stock)){
        state.items.push(action.payload);
      }
    },
    // Acción para incrementar la cantidad de un producto en el carrito
    incrementQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity < itemInCart.stock) {
        itemInCart.quantity += 1;
      }
    },
    // Acción para decrementar la cantidad de un producto en el carrito
    decrementQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
      }
    },
    // Acción para eliminar un producto del carrito
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    // Acción para vaciar el carrito
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

// Exportar las acciones del slice
export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;

// Exportar el reducer del slice
export default cartSlice.reducer;
