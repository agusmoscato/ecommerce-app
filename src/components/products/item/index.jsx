import React from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../../themes';

const ProductItem = ({id, title, price, backgroundColor, thumbnail, onSelectProduct }) => {
  
  return (
    <TouchableHighlight
      onPress={() => onSelectProduct({ productId: id, name: title })}
      style={styles.container}
      underlayColor={COLORS.primary}>
      <View style={[styles.productContainer, {shadowColor:backgroundColor}]}>
        <Image
          source={ { uri: thumbnail } }
          style={styles.imageBackground}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <View style={[styles.textContainer, {}]}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.addCart}>Agregar al carrito</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ProductItem;

