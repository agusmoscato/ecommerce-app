import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {TouchableOpacity, StyleSheet} from "react-native"; 
import { Ionicons } from '@expo/vector-icons';
import { Categories, Products, ProductDetail } from "../screens";
import { COLORS } from "../themes";
const Stack = createNativeStackNavigator();

function ShopNavigator(){
    return (
      <Stack.Navigator initialRouteName="Categorias"
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
        <Stack.Screen name="Categorias" component={Categories}/>
        <Stack.Screen
        name="Productos"
        component={Products}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
            title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Detalles del producto"
        component={ProductDetail}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name,
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