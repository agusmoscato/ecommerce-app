import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Categories, Products, ProductDetail } from "../screens";
import SettingsNavigator from './settings';
import { COLORS } from "../themes";

// Crear una instancia de StackNavigator nativo
const Stack = createNativeStackNavigator();

/**
 * Navegador para la sección de la tienda.
 * Contiene las rutas y opciones de navegación para las categorías, productos y detalles del producto.
 */
function ShopNavigator() {
  return (
    <Stack.Navigator initialRouteName="Categorias"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTintColor: COLORS.white,
        animation: 'fade_from_bottom',
      })}
    >
      {/* Pantalla de Categorías */}
      <Stack.Screen name="Categorias" component={Categories} />

      {/* Pantalla de Productos */}
      <Stack.Screen
        name="Productos"
        component={Products}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name, // Mostrar el título de la categoría como título de la pantalla
        })}
      />

      {/* Pantalla de Detalles del Producto */}
      <Stack.Screen
        name="Detalles del producto"
        component={ProductDetail}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name, // Mostrar el título del producto como título de la pantalla
        })}
      />
    </Stack.Navigator>
  );
}

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

export default ShopNavigator;
