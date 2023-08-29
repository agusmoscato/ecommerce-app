import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { Input, ProductItem } from '../../components';
import { COLORS } from '../../themes';

import { useSelector } from 'react-redux';
import { useGetProductsByCategoryQuery } from '../../store/products/api';

/**
 * Componente que muestra una lista de productos por categoría.
 * 
 * @param {object} route - Objeto de ruta que contiene los parámetros de navegación.
 * @param {object} navigation - Objeto de navegación.
 */
function Product({ route, navigation }) {
  // Obtenemos el ID de la categoría de los parámetros de la ruta.
  const { categoryId } = route.params;

  // Utilizamos la consulta de la API para obtener los productos por categoría.
  const { data, error, isLoading } = useGetProductsByCategoryQuery(categoryId);

  // Estado para gestionar la búsqueda de productos.
  const [search, setSearch] = useState('');
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Funciones para gestionar la entrada de búsqueda.
  const onHandleBlur = () => {};
  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandleFocus = () => {};

  // Función para borrar el texto de búsqueda.
  const deleteSearch = () => {
    setSearch('');
  };

  // Función para filtrar productos por búsqueda.
  const filterBySearch = (query) => {
    let updatedProductList = [...filteredProductsByCategory];
    updatedProductList = updatedProductList.filter((product) => {
      return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredProducts(updatedProductList);
  };

  // Función para seleccionar un producto y navegar a los detalles.
  const onSelectProduct = ({ productId }) => {
    navigation.navigate('Detalles del producto', { productId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Input de búsqueda */}
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Buscar"
          borderColor={borderColor}
        />
        {/* Icono para borrar la búsqueda */}
        {search.length > 0 && (
          <Ionicons
            name="close-circle"
            size={30}
            color={COLORS.black}
            onPress={deleteSearch}
          />
        )}
      </View>
      {/* Lista de productos */}
      <FlatList
        style={styles.products}
        data={data}
        renderItem={({ item }) => (
          <ProductItem {...item} onSelectProduct={onSelectProduct} />
        )}
        contentContainerStyle={styles.productsContent}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
      {/* Mensaje si no se encuentran productos */}
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No se han encontrado productos</Text>
        </View>
      )}
    </View>
  );
}

export default Product;
