import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';

/**
 * Formatea una fecha en formato local de la configuración del dispositivo.
 * @param {string} time - Marca de tiempo de la fecha.
 * @returns {string} - Fecha formateada en formato local.
 */
const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

/**
 * Componente de elemento de pedido que muestra la información de un pedido.
 * @param {object} props - Propiedades del componente.
 * @param {string} props.id - ID del pedido.
 * @param {number} props.totalCart - Total del carrito en el pedido.
 * @param {string} props.createAt - Fecha de creación del pedido.
 * @param {array} props.items - Lista de elementos en el pedido.
 * @param {function} props.onSelectOrder - Función para manejar la selección del pedido.
 * @returns {JSX.Element} - Elemento JSX que muestra la información del pedido.
 */
const OrderItem = ({ id, totalCart, createAt, items, onSelectOrder }) => {
  return (
    <TouchableOpacity onPress={() => onSelectOrder({ orderId: id })} style={styles.orderItemContainer}>
      <View style={styles.orderHeaderContainer}>
        <View style={styles.orderHeaderModule}>
          <Text style={styles.orderHeaderText}>FECHA DEL PEDIDO:</Text>
          <Text style={styles.orderHeaderText}>{formatDate(createAt)}</Text>
        </View>
        <View style={styles.orderHeaderModule}>
          <Text style={styles.orderHeaderText}>TOTAL: ${totalCart}</Text>
        </View>
        <View style={styles.orderHeaderModule}>
          <Text style={styles.orderHeaderText}>ID: #{id}</Text>
        </View>
      </View>
      <View style={styles.orderBody}>
        <Text style={styles.orderItemText}>Total de Items: {items.length}</Text>
        <Text style={styles.orderItemText}>Total: $ {totalCart}</Text>
        <Text style={styles.masInfo}>Más información</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;
