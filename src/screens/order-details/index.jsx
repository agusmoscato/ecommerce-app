import { View, Text, ActivityIndicator, Image, FlatList } from 'react-native';
import { styles } from './styles';
import { useGetOrderByIdQuery } from '../../store/orders/api'; // Asegúrate de ajustar la importación
import { COLORS } from '../../themes';

function DetallePedido({ route }) {
  // Obtener el ID del pedido de los parámetros de la ruta
  const { orderId } = route.params;

  // Consultar los datos del pedido utilizando la API de consulta correspondiente
  const { data, isLoading } = useGetOrderByIdQuery(orderId);

  // Encontrar el pedido específico dentro de los datos consultados
  const order = data?.find((pedido) => pedido.id === orderId);

  // Función para formatear la fecha en formato legible
  const formatearFecha = (tiempo) => {
    const fecha = new Date(tiempo);
    return fecha.toLocaleDateString();
  };

  // Componente para renderizar cada ítem del pedido en la lista
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.thumbnail }} style={styles.itemImage} resizeMode="contain" />
        </View>
        <View style={styles.content}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>Precio unitario: ${(item.price - item.price * (item.discountPercentage / 100)).toFixed(2)}</Text>
          <Text style={styles.itemQuantity}>Cantidad: {item.quantity}</Text>
        </View>
      </View>
    );
  };

  // Renderizar un indicador de carga si los datos están cargando
  if (isLoading) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  // Renderizar la vista del detalle del pedido
  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Text style={styles.title}>ID del Pedido: #{order.id}</Text>
        <Text style={styles.title}>FECHA: {formatearFecha(order.createAt)}</Text>
      </View>
      <FlatList data={order.items} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      <View style={styles.totalOrder}>
        <Text style={styles.title}>Total del Pedido:</Text>
        <Text style={styles.title}>$ {order.totalCart}</Text>
      </View>
    </View>
  );
}

export default DetallePedido;
