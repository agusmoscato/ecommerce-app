import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { CategoryItem } from '../../components';
import { COLORS } from '../../themes';
import { useGetCategoriesQuery } from '../../store/categories/api';

/**
 * Pantalla que muestra una lista de categorías.
 * Permite al usuario seleccionar una categoría para ver los productos relacionados.
 *
 * @param {object} navigation - El objeto de navegación proporcionado por React Navigation.
 * @returns {JSX.Element} - Componente de pantalla de categorías.
 */
function Categories({ navigation }) {
  // Obtener datos de categorías y estado de carga utilizando el hook useGetCategoriesQuery
  const { data, isLoading } = useGetCategoriesQuery();

  /**
   * Maneja la selección de una categoría y navega a la pantalla de productos con la categoría seleccionada.
   * Si la categoría seleccionada es la "categoría principal" (ID 0), se omite la categoría en la navegación.
   *
   * @param {object} category - La categoría seleccionada.
   */
  const onSelectCategory = ({ categoryId }) => {
    if (categoryId === 0) {
      categoryId = ''; // Si es la categoría principal, se omite en la navegación
      navigation.navigate('Productos', { categoryId });
    } else {
      navigation.navigate('Productos', { categoryId });
    }
  };

  // Mostrar indicador de carga si los datos están cargando
  if (isLoading) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  // Renderizar la lista de categorías utilizando FlatList
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) => (
            <CategoryItem {...item} onSelectCategory={() => onSelectCategory({ categoryId: item.id })} />
          )}
          keyExtractor={(item) => item.id.toString()} // Convertir a cadena para evitar advertencias
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;
