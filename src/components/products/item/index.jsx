/**
 * Componente de elemento de producto.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.id - ID del producto.
 * @param {string} props.title - Título del producto.
 * @param {number} props.price - Precio original del producto.
 * @param {string} props.backgroundColor - Color de fondo del producto.
 * @param {number} props.discountPercentage - Porcentaje de descuento del producto.
 * @param {string} props.thumbnail - URL de la imagen del producto.
 * @param {function} props.onSelectProduct - Función que se llama cuando se selecciona el producto.
 * @returns {JSX.Element} - Elemento de producto interactivo.
 */
import React from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../../themes';

const ProductItem = ({ id, title, price, backgroundColor, discountPercentage, thumbnail, onSelectProduct }) => {
  // Calcular el precio con descuento
  const priceDiscount = (price - price * (discountPercentage / 100)).toFixed(0);

  return (
    <TouchableHighlight
      onPress={() => onSelectProduct({ productId: id, name: title })}
      style={styles.container}
      underlayColor={COLORS.primary}>
      <View style={[styles.productContainer, { shadowColor: backgroundColor }]}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.imageBackground}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <View style={[styles.textContainer]}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.priceDiscount}>${priceDiscount} <Text style={styles.offer}>{discountPercentage}% OFF</Text></Text>
          <Text style={styles.masInfo}>Más información</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ProductItem;
