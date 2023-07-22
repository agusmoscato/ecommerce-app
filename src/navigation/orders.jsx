import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Orders } from '../screens';
import { COLORS } from '../themes';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Ordenes"
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
      <Stack.Screen name="Ordenes" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;