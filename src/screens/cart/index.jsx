import { View ,FlatList,Text, TouchableOpacity} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';

import { incrementQuantity,decrementQuantity,removeFromCart,clearCart } from '../../store/cart/cartSlice';
import { useCreateOrderMutation } from '../../store/orders/api';


const Cart = ({navigation}) => {
  const cart = useSelector((state) => state.cart.items);
  const totalCart = cart.reduce((total, item) => total + ((item.price-item.price*(item.discountPercentage/100))) * item.quantity, 0).toFixed(0);

  
  const dispatch = useDispatch();
  const onIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };
  const onDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };
  const onRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  
  const [createOrder, {data, isError, error, isLoading}] = useCreateOrderMutation();
   const onCreateOrder = async () => {
    const nuevaOrden = {
      id: Math.floor(Math.random() * 1000),
      items: cart,
      totalCart,
      user: {
        id:1,
        name: 'Mr Nashe',
        address: 'Calle 123',
        phone: '123456789',
        email: 'mrsNashe@123.com'
      },
      payment:{
        method: 'VISA',
      },
      derivery:{
        method: 'ANDREANI',
        trackingNumber: Math.floor(Math.random() * 1000),
      },
      createAt: Date.now(),
      finishedAt: '',
    };
    try {
      await createOrder(nuevaOrden);
      dispatch(clearCart());
      navigation.navigate('OrdersTab');
    } catch (e) {
      console.warn({ error, e });
    }
  };
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
          renderItem={({ item }) => <CartItem {...item} 
          onIncrementQuantity={onIncrementQuantity}
          onDecrementQuantity={onDecrementQuantity}
          onRemoveFromCart={onRemoveFromCart}
          />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.listContainer}
          />
          <View>
          <Text style={styles.priceTotal}>Total: ${totalCart}</Text>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={onCreateOrder}>
              <Text style={styles.addToCartText}>Comprar ahora</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Cart;