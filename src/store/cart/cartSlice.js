import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

const initialState = {
  items: [],
  total: 0,
};

const handleButtonPress = () => {
  Alert.alert(
    'Se agrego un producto al carrito',
  );
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      handleButtonPress();
      if (itemInCart && itemInCart.quantity < itemInCart.stock) {
        itemInCart.quantity += 1;
      } else if (!(itemInCart)||(itemInCart.quantity < itemInCart.stock)){
        state.items.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity < itemInCart.stock) {
        itemInCart.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart,incrementQuantity,decrementQuantity,removeFromCart,clearCart } = cartSlice.actions;

export default cartSlice.reducer;