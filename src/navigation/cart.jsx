import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart } from '../screens';
import { COLORS } from '../themes';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTintColor: COLORS.white,
        animation: 'fade_from_bottom',
      })}>
      <Stack.Screen name="Carrito" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;