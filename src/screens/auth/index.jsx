import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { setUser } from '../../store/auth/authSlice';
import { COLORS } from '../../themes';

const Auth = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const headerTitle = isLogin ? 'Iniciar Sesion' : 'Registrarse';
  const buttonTitle = isLogin ? 'Iniciar Sesion' : 'Registrarse';
  const messageText = isLogin ? '¿Necesitas una cuenta?' : '¿Ya tienes una cuenta?';

  const [signIn, { data }] = useSignInMutation();

  const [signUp] = useSignUpMutation();

  const onHandlerAuth = async () => {
    try {
      if (isLogin) {
        const result = await signIn({ email, password });
        if (result?.data) dispatch(setUser(result.data));
      } else {
        await signUp({ email, password });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
          <Text style={styles.title}>{headerTitle}</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
          style={styles.input}
          placeholder="email@domain.com"
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