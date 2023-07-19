import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

import { styles } from './styles';
import PRODUCTS from '../../constants/data/products.json';

function ProductDetail({ navigation, route }) {
  const { productId } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={[styles.category, {color:product.backgroundColor}]}>▣{product.categoryName}</Text>
      <View style={styles.containerImage}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />
      </View>
        <Text style={styles.price}>$ {product.price}</Text>
        <Text style={styles.priceDiscount}>$ {product.price-product.price*(product.discountPercentage/100)} <Text style={styles.offer}>{product.discountPercentage}% OFF</Text></Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <Button
        title='Agregar al Carrito'
        color='green'
        />
    </View>
  );
}

export default ProductDetail;



