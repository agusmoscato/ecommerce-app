import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Address, Profile, Settings, Payment } from '../screens';
import { COLORS } from '../themes';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Configuracion"
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
        headerLeft: () => (
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Configuracion" component={Settings} />
      <Stack.Screen name="FotoPerfil" component={Profile} />
      <Stack.Screen name="Direccion" component={Address} />
      <Stack.Screen name="Metodos De Pago" component={Payment} />
    </Stack.Navigator>
  );
};

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

export default SettingsNavigator;