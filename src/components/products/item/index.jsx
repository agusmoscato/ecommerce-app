import React from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../../themes';

const ProductItem = ({ id, title, price, backgroundColor, thumbnail, onSelectCategory }) => {
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={styles.container}
      underlayColor={COLORS.primary}>
      <View>
        <Image
          source={ { uri: thumbnail } }
          style={styles.imageBackground}
          resizeMode='contain'
        />
        <View style={[styles.textContainer, {backgroundColor}]}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ProductItem;
