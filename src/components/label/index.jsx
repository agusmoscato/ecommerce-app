/**
 * Componente Label
 * 
 * Este componente muestra un rótulo (etiqueta) junto con su contenido y, opcionalmente, un subrótulo.
 * Puede personalizarse mediante los estilos proporcionados.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {ReactNode} props.children - El contenido que se mostrará junto al rótulo.
 * @param {string} props.label - El texto del rótulo principal.
 * @param {object} [props.labelStyle] - Estilos adicionales para el rótulo principal.
 * @param {string} [props.subLabel] - El texto del subrótulo opcional.
 * @param {object} [props.subLabelStyle] - Estilos adicionales para el subrótulo.
 * @returns {JSX.Element} - El componente Label con el rótulo, contenido y subrótulo (si se proporciona).
 */
import { View, Text } from 'react-native';
import React from 'react';

import { styles } from './styles';

const Label = ({ children, label, labelStyle, subLabel, subLabelStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {children}
      {subLabel && <Text style={[styles.subLabel, subLabelStyle]}>{subLabel}</Text>}
    </View>
  );
};

export default Label;
