import { Ionicons } from '@expo/vector-icons/';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import PerfilNavigator from './settings';
import { COLORS } from '../themes';

// Crear un navegador de pestañas inferior usando createBottomTabNavigator
const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  // Obtener la cantidad de elementos en el carrito desde el estado usando useSelector
  const numberCartItem = useSelector((state) => state.cart.items);

  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Tienda',
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Carrito',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={color} />
          ),
          tabBarBadge: numberCartItem.length, // Mostrar número de elementos en el carrito como un distintivo
          tabBarBadgeStyle: {
            backgroundColor: COLORS.primary,
            color: COLORS.white,
            fontSize: 11,
          },
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={PerfilNavigator}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name="person" size={30} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
