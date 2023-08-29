import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Profile, Settings, Orders, EditProfile, OrderDetail } from '../screens';
import { COLORS } from '../themes';

// Crear una pila de navegación nativa
const Stack = createNativeStackNavigator();

// Navegador para la sección de perfil
const PerfilNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={({ navigation }) => ({
        // Estilos de la barra de navegación
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTintColor: COLORS.white,
        // Animación de transición
        animation: 'fade_from_bottom',
        // Botón de retroceso personalizado en la barra de navegación
        headerLeft: () => (
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
          </TouchableOpacity>
        ),
      })}>
      {/* Definir las pantallas en la pila de navegación */}
      <Stack.Screen name="Perfil" component={Settings} />
      <Stack.Screen name="Informacion del Usuario" component={Profile} />
      <Stack.Screen name="Editar Informacion del Usuario" component={EditProfile} />
      <Stack.Screen name="Ordenes" component={Orders} />

      <Stack.Screen
        name="Detalles de la orden"
        component={OrderDetail}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          )
        })}
      />
    </Stack.Navigator>
  );
};

// Estilos
const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
});

export default PerfilNavigator;
