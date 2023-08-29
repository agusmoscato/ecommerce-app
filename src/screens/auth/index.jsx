import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { setUser } from '../../store/auth/authSlice';
import { COLORS } from '../../themes';

/**
 * Componente de Autenticación.
 * Permite a los usuarios iniciar sesión o registrarse.
 */
const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const headerTitle = isLogin ? 'Iniciar Sesión' : 'Registrarse';
  const buttonTitle = isLogin ? 'Iniciar Sesión' : 'Registrarse';
  const messageText = isLogin ? '¿Necesitas una cuenta?' : '¿Ya tienes una cuenta?';

  // Mutation para el inicio de sesión
  const [signIn, { data }] = useSignInMutation();

  // Mutation para el registro de usuario
  const [signUp, { isError: signUpError }] = useSignUpMutation();

  // Manejar la autenticación
  const onHandlerAuth = async () => {
    try {
      if (isLogin) {
        // Realizar el inicio de sesión
        const result = await signIn({ email, password });
        if (!result?.data) {
          Alert.alert('Error de conexión', 'La combinación de correo electrónico y contraseña no coincide.', [
            { text: 'OK' },
          ]);
        }
        if (result?.data) dispatch(setUser(result.data));
      } else {
        // Realizar el registro de usuario
        await signUp({ email, password });
        if (signUpError) {
          Alert.alert('Verifica tus datos para registrarte con éxito.');
        }
        if (!signUpError) Alert.alert('Usuario creado exitosamente');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{headerTitle}</Text>
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="correo@ejemplo.com"
          placeholderTextColor={COLORS.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="*********"
          placeholderTextColor={COLORS.gray}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={onHandlerAuth}>
            <Text style={styles.btnText}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Auth;
