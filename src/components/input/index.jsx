import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

/**
 * Componente reutilizable de entrada de texto personalizada.
 * 
 * @param {string} borderColor - Color del borde de la entrada de texto.
 * @param {function} onHandleFocus - Manejador para el evento de enfoque.
 * @param {function} onHandleBlur - Manejador para el evento de pérdida de enfoque.
 * @param {function} onHandleChangeText - Manejador para el evento de cambio de texto.
 * @param {...any} props - Otras propiedades de la entrada de texto.
 * @returns {JSX.Element} Componente de entrada de texto.
 */
const Input = ({ borderColor, onHandleFocus, onHandleBlur, onHandleChangeText, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, { borderColor }]}
        onFocus={onHandleFocus}
        onBlur={onHandleBlur}
        onChangeText={onHandleChangeText}
        autoCorrect={false}
        autoCapitalize="none"
        cursorColor={borderColor}
        placeholderTextColor={borderColor}
      />
    </View>
  );
};

export default Input;
