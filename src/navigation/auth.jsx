import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Auth } from '../screens'; // Importa el componente 'Auth' desde la ubicación correcta de tus pantallas

// Crea una instancia de Stack Navigator
const Stack = createNativeStackNavigator();

// Definición del Navegador de Autenticación
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={() => ({
        headerShown: false, // Oculta la barra de navegación en todas las pantallas del stack
      })}>
      {/* Define la pantalla 'Auth' dentro del Stack */}
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};

export default AuthNavigator; // Exporta el Navegador de Autenticación para usarlo en otros componentes
