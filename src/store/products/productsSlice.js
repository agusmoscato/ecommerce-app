import { createSlice } from "@reduxjs/toolkit";

// Importa la lista de productos desde el archivo JSON de datos constantes
import PRODUCTOS from '../../constants/data/products.json';

// Define el estado inicial del slice de productos
const initialState = {
    // La lista de productos se inicializa con los productos del archivo JSON
    datos: PRODUCTOS,
};

// Crea el slice de productos utilizando createSlice de Redux Toolkit
const sliceDeProductos = createSlice({
    // Proporciona un nombre descriptivo para el slice
    name: 'productos',
    // Establece el estado inicial del slice
    initialState,
    // Define las funciones reductoras para manejar acciones específicas
    reducers: {},
});

// Exporta el reductor del slice de productos
export default sliceDeProductos.reducer;
