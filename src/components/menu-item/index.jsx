/**
 * Componente MenuItem
 * 
 * Este componente representa un elemento de menú interactivo que muestra un ícono y un título.
 * Puede ser utilizado en varios contextos de la aplicación para mostrar opciones de navegación u otras acciones.
 * 
 * @param {string} icon - El nombre del ícono de Ionicons que se mostrará en el elemento.
 * @param {string} title - El título que se mostrará junto al ícono.
 * @param {string} route - La ruta o destino asociado al elemento del menú.
 * @param {function} onSelect - Función que se ejecuta cuando se selecciona el elemento del menú.
 * 
 * @returns {JSX.Element} - El elemento JSX que representa el MenuItem.
 */

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../themes';

const MenuItem = ({ icon, title, route, onSelect }) => {
  return (
    <View style={styles.container}>
      {/* El elemento TouchableOpacity se vuelve interactivo al hacer clic */}
      <TouchableOpacity style={styles.content} onPress={() => onSelect({ route, title })}>
        {/* El ícono de Ionicons con el nombre proporcionado */}
        <Ionicons name={icon} size={44} color={COLORS.secondary} />
        {/* El título del elemento del menú */}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;
