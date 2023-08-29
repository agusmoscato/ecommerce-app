import { createSlice } from "@reduxjs/toolkit";

// Importamos el arreglo de categorías desde el archivo JSON de constantes
import CATEGORIES from '../../constants/data/categories.json';

// Estado inicial para el slice de categorías
const initialState = {
  data: CATEGORIES, // Inicializamos el estado con las categorías del archivo JSON
};

// Creamos el slice de categorías utilizando createSlice de Redux Toolkit
const categoriesSlice = createSlice({
  name: 'categories', // Nombre del slice
  initialState,      // Estado inicial definido anteriormente
  reducers: {},      // Reductores (acciones) específicos para el slice (en este caso, no hay reductores)
});

// Exportamos el reductor (reducer) del slice de categorías
export default categoriesSlice.reducer;
