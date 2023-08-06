import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {TouchableOpacity, StyleSheet} from "react-native"; 
import { Ionicons } from '@expo/vector-icons';
import { Categories, Products, ProductDetail } from "../screens";
import SettingsNavigator from './settings';
import { COLORS } from "../themes";
const Stack = createNativeStackNavigator();

function ShopNavigator(){
    return (
      <Stack.Navigator initialRouteName="Categorias"
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTintColor: COLORS.white,
        animation: 'fade_from_bottom',
        headerRight: () => (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('SettingsStack')}>
            <Ionicons name="settings-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
        ),
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
      <Stack.Screen
        name="SettingsStack"
        component={SettingsNavigator}
        options={({ navigation, route }) => ({
          headerShown: false,
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