import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';
import { MenuItem } from '../../components';
import { MENUS } from '../../constants/data/menus';

/**
 * Componente de Configuración
 * 
 * @param {object} navigation - Objeto de navegación proporcionado por React Navigation.
 * @returns {JSX.Element} Elemento JSX que muestra la pantalla de configuración.
 */
const Settings = ({ navigation }) => {
  /**
   * Función de selección de menú
   * 
   * @param {object} route - Objeto de ruta a la que se navegará.
   */
  const onSelect = ({ route }) => {
    navigation.navigate(route);
  };

  /**
   * Función de renderizado de elementos de menú
   * 
   * @param {object} item - Elemento de menú que se va a renderizar.
   * @returns {JSX.Element} Elemento JSX que representa un elemento de menú.
   */
  const renderItem = ({ item }) => <MenuItem {...item} onSelect={onSelect} />;

  /**
   * Función para extraer la clave de un elemento de menú.
   * 
   * @param {object} item - Elemento de menú del que se extraerá la clave.
   * @returns {string} Clave única para el elemento de menú.
   */
  const keyExtractor = (item) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={MENUS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.settingList}
      />
    </View>
  );
};

export default Settings;
