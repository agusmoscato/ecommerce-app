import { createSlice } from "@reduxjs/toolkit";

// Importa la lista de productos desde el archivo JSON de datos constantes
import PRODUCTOS from '../../constants/data/products.json';

// Define el estado inicial del slice de productos
const estadoInicial = {
    // La lista de productos se inicializa con los productos del archivo JSON
    datos: PRODUCTOS,
};

// Crea el slice de productos utilizando createSlice de Redux Toolkit
const sliceDeProductos = createSlice({
    // Proporciona un nombre descriptivo para el slice
    nombre: 'productos',
    // Establece el estado inicial del slice
    estadoInicial,
    // Define las funciones reductoras para manejar acciones específicas
    reducers: {},
});

// Exporta el reductor del slice de productos
export default sliceDeProductos.reducer;
