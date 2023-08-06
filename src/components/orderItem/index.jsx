import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ id, totalCart, createAt, items }) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.orderItemContainer}>
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
        <Text style={styles.orderItemText}>Total Items: {items.length}</Text>
        <Text style={styles.orderItemText}>Total: $ {totalCart}</Text>
        <Text style={styles.masInfo}>Mas informacion</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;