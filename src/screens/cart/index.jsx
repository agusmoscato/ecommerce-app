import { View ,FlatList,Text, TouchableOpacity,useState} from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalCart = cart.reduce((total, item) => total + ((item.price-item.price*(item.discountPercentage/100))) * item.quantity, 0).toFixed(0);
  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.notFound}>
          <Text style={styles.notFoundTextTitle}>¡Empeza a armar tu carrito!</Text>
          <Text style={styles.notFoundTextDesc}>Comienza a agregar productos desde la pestaña de "Carrito"</Text>
        </View>
      ):(
        <View style={styles.container}>
          <FlatList
          data={cart}
          renderItem={({ item }) => <CartItem {...item} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.listContainer}
          />
          <View>
          <Text style={styles.priceTotal}>Total: ${totalCart}</Text>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={()=>{}}>
              <Text style={styles.addToCartText}>Comprar ahora</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Cart;