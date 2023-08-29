import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthNavigator from './auth';
import TabsNavigator from './tabs';

/**
 * Componente principal para la navegación de la aplicación.
 * Decide qué navegación mostrar según si el usuario está autenticado o no.
 */
function RootNavigator() {
  // Obtener el estado de autenticación del usuario desde Redux
  const auth = useSelector((state) => state.auth.user);

  return (
    <NavigationContainer>
      {/* Mostrar la navegación de pestañas si el usuario está autenticado, 
          de lo contrario mostrar la navegación de autenticación */}
      {auth?.localId ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
