/**
 * Componente de la pantalla de órdenes.
 * Muestra las órdenes del usuario actual.
 *
 * @param {Object} navigation - Objeto de navegación de React Navigation.
 * @returns {JSX.Element} Elemento JSX que representa la pantalla de órdenes.
 */
import React from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetOrdersByUserQuery } from '../../store/orders/api';
import { OrderItem } from '../../components';
import { COLORS } from '../../themes';
import { styles } from './styles';

/**
 * Pantalla de órdenes.
 *
 * @param {Object} navigation - Objeto de navegación de React Navigation.
 * @returns {JSX.Element} Elemento JSX que representa la pantalla de órdenes.
 */
const Orders = ({ navigation }) => {
  // Obtener el ID del usuario local desde el estado de Redux
  const localId = useSelector((state) => state.auth.user.localId);

  // Obtener los datos de las órdenes del usuario actual utilizando la API
  const { data, isLoading } = useGetOrdersByUserQuery(localId);

  /**
   * Maneja la selección de una orden y navega a la pantalla de detalles de la orden.
   *
   * @param {Object} orderId - ID de la orden seleccionada.
   */
  const onSelectOrder = ({ orderId }) => {
    navigation.navigate('Detalles de la orden', { orderId });
  };

  // Renderiza un elemento de orden
  const renderItem = ({ item }) => <OrderItem {...item} onSelectOrder={onSelectOrder} />;

  // Función para extraer una clave única para cada elemento de la lista
  const keyExtractor = (item) => item.id.toString();

  return (
    <View>
      {isLoading ? (
        // Mostrar indicador de carga si los datos están siendo cargados
        <View>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : data.length === 0 ? (
        // Mostrar mensaje si no hay órdenes disponibles
        <View style={styles.notFound}>
          <Text style={styles.notFoundTextTitle}>¡No tienes ninguna orden!</Text>
          <Text style={styles.notFoundTextDesc}>Comienza a agregar productos a tu carrito.</Text>
        </View>
      ) : (
        // Mostrar la lista de órdenes si hay datos disponibles
        <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
      )}
    </View>
  );
};

export default Orders;
