import { View, Text, Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { addToCart } from '../../store/cart/cartSlice';
import { useGetProductByIdQuery } from '../../store/products/api';
import { COLORS } from '../../themes';

function ProductDetail({ route }) {
  const { productId } = route.params;
  const { data, isLoading } = useGetProductByIdQuery(productId);
  const product = data?.find((product) => product.id === productId);

  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (isLoading)
  return (
    <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );

  const priceDiscount = (product.price-product.price*(product.discountPercentage/100)).toFixed(0);
  
  return (
    <View style={styles.container}>
       <View style={styles.content}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={[styles.category, {color:product.backgroundColor}]}>▣{product.categoryName}</Text>
      <View style={styles.containerImage}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />
      </View>
        <Text style={styles.price}>$ {product.price}</Text>
        <Text style={styles.priceDiscount}>$ {priceDiscount} <Text style={styles.offer}>{product.discountPercentage}% OFF</Text></Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={onAddToCart}>
          <Text style={styles.addToCartText}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}

export default ProductDetail;



