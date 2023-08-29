import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart } from '../screens';
import { COLORS } from '../themes';

// Crear una instancia del StackNavigator
const Stack = createNativeStackNavigator();

/**
 * Navegador para la pantalla de Carrito.
 * 
 * Este componente define la navegación y configuración para la pantalla de Carrito.
 */
const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={() => ({
        // Estilo del encabezado
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        // Estilo del título del encabezado
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        // Color del texto del encabezado
        headerTintColor: COLORS.white,
        // Animación de transición
        animation: 'fade_from_bottom',
      })}
    >
      {/* Definir la pantalla "Carrito" */}
      <Stack.Screen name="Carrito" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
