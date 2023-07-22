import { View, Text } from 'react-native';

import { styles } from './styles';

const Orders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ordersTextTitle}>Ordenes</Text>
      <Text style={styles.ordersTextDesc}>Aqui se mostraran tus pedidos</Text>
    </View>
  );
};

export default Orders;