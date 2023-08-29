import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from '../../store/cart/cartSlice';
import { useGetProfileQuery } from '../../store/settings/api';
import { useCreateOrderMutation } from '../../store/orders/api';

const Cart = ({ navigation }) => {
  // Obtener el carrito desde el estado de Redux
  const cart = useSelector((state) => state.cart.items);

  // Calcular el total del carrito
  const totalCart = cart.reduce(
    (total, item) => total + ((item.price - item.price * (item.discountPercentage / 100)) * item.quantity),
    0
  ).toFixed(0);

  const dispatch = useDispatch();

  // Función para incrementar la cantidad de un producto en el carrito
  const onIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  // Función para decrementar la cantidad de un producto en el carrito
  const onDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  // Función para eliminar un producto del carrito
  const onRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // Obtener el ID del usuario local
  const localId = useSelector((state) => state.auth.user.localId);

  // Obtener los datos del perfil del usuario
  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });

  // Usar la mutación para crear una nueva orden
  const [createOrder, { data, isError, error, isLoading }] = useCreateOrderMutation();

  // Función para crear una nueva orden
  const onCreateOrder = async () => {
    const nuevaOrden = {
      id: Math.floor(Math.random() * 1000),
      items: cart,
      totalCart,
      userId: localId,
      payment: {
        method: 'VISA',
      },
      createAt: Date.now(),
      finishedAt: '',
    };

    try {
      await createOrder(nuevaOrden);
      dispatch(clearCart());
      Alert.alert('Orden creada con éxito.');
      navigation.navigate('Ordenes');
    } catch (e) {
      console.warn({ error, e });
    }
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.notFound}>
          <Text style={styles.notFoundTextTitle}>¡Empieza a armar tu carrito!</Text>
          <Text style={styles.notFoundTextDesc}>Comienza a agregar productos desde la pestaña de "Tienda"</Text>
          <Text style={styles.notFoundTextDesc}>Puedes chequear tus órdenes históricas desde Perfil ➡️ Ordenes.</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={cart}
            renderItem={({ item }) => (
              <CartItem
                {...item}
                onIncrementQuantity={onIncrementQuantity}
                onDecrementQuantity={onDecrementQuantity}
                onRemoveFromCart={onRemoveFromCart}
              />
            )}
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
