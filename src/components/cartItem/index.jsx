import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import { styles } from './styles';
import { COLORS } from '../../themes';
import { incrementQuantity,decrementQuantity,removeFromCart } from '../../store/cart/cartSlice';

const CartItem = ({ navigation, route , backgroundColor, id, categoryId, title, price,discountPercentage, thumbnail, quantity, stock, ...props }) => {
  const priceFinal = (price * quantity).toFixed(0);
  const priceDiscount = ((price-price*(discountPercentage/100))*quantity).toFixed(0);

  
  const products = useSelector((state) => state.products.data);
  const product = products.find((product) => product.id === id);
  const dispatch = useDispatch();
  const onIncrementQuantity = () => {
    dispatch(incrementQuantity(product));
  };
  const onDecrementQuantity = () => {
    dispatch(decrementQuantity(product));
  };
  const onRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, {backgroundColor : backgroundColor }]}>
        <Image source={{ uri: thumbnail }} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.qty}>{`Cantidad: ${quantity} | stock: ${stock}`}</Text>
        <Text style={styles.offer}>{discountPercentage}% <Text style={styles.price}>${priceFinal}</Text></Text>
        <Text style={styles.priceDiscount}>${priceDiscount}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.increaseButton} onPress={onIncrementQuantity}>
            <Text style={styles.increaseButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.decreaseButton} onPress={onDecrementQuantity}>
            <Text style={styles.decreaseButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onRemoveFromCart} style={styles.deleteButton}>
            <Ionicons name="trash" size={14} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;