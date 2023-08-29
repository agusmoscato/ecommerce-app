import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { styles } from './styles';
import Label from '../label';

/**
 * Componente reutilizable para renderizar un campo de entrada de texto.
 * 
 * @param {boolean} editable - Determina si el campo de entrada es editable.
 * @param {React.ReactNode} children - Contenido adicional para el campo.
 * @param {string} value - Valor actual del campo de entrada.
 * @param {object} style - Estilos adicionales para aplicar al campo.
 * @param {function} onChangeText - Función para manejar cambios en el texto.
 * @param {function} onFocus - Función llamada cuando el campo gana el foco.
 * @param {function} onBlur - Función llamada cuando el campo pierde el foco.
 * @param {number} maxLength - Longitud máxima del texto permitida.
 * @param {string} placeholder - Texto de marcador de posición.
 * @param {string} placeholderTextColor - Color del texto de marcador de posición.
 * @param {string} keyboardType - Tipo de teclado que se mostrará.
 * @param {boolean} hasError - Indica si hay un error en el campo.
 * @param {string} error - Mensaje de error a mostrar.
 * @param {boolean} touched - Indica si el campo ha sido tocado.
 * @param {object} props - Otras propiedades adicionales que se aplicarán al componente.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa el campo de entrada de texto.
 */
const InputForm = ({
  editable,
  children,
  value,
  style,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor,
  keyboardType,
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
          {...props}
          editable={editable}
          value={value}
          style={[styles.input, style]}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
      </Label>
      {hasError && touched ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default InputForm;
