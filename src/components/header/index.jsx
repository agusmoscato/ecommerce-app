/**
 * Componente Header
 * 
 * Este componente muestra un encabezado con un título proporcionado.
 * 
 * @param {string} title - El título que se mostrará en el encabezado.
 * 
 * @returns {JSX.Element} - Un componente View que contiene el título en un estilo definido.
 */
import { View, Text } from 'react-native';
import React from 'react';

import { styles } from './styles';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
