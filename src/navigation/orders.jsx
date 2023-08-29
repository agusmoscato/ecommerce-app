import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Orders } from '../screens';
import { COLORS } from '../themes';

// Crear una instancia del stack navigator nativo
const Stack = createNativeStackNavigator();

/**
 * Navegador de la pantalla de órdenes.
 * Contiene la configuración de navegación para la pantalla de órdenes.
 */
const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Ordenes"
      screenOptions={() => ({
        // Configuración del estilo del encabezado
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        // Configuración del estilo del título del encabezado
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        // Configuración del color del texto del encabezado
        headerTintColor: COLORS.white,
        // Configuración de animación de transición
        animation: 'fade_from_bottom',
      })}
    >
      {/* Pantalla de órdenes */}
      <Stack.Screen name="Ordenes" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
