import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetProfileQuery, useUpdateImageProfileMutation, useUpdateAccountMutation } from '../../store/settings/api';
import { ImageSelector } from '../../components';
import { COLORS } from '../../themes';
import { styles } from './styles';

const EditProfile = ({ navigation }) => {
  // Obtener el ID local del usuario autenticado desde el estado
  const localId = useSelector((state) => state.auth.user.localId);

  // Obtener las funciones de mutación para actualizar la imagen de perfil y los datos de la cuenta
  const [uploadImageProfile] = useUpdateImageProfileMutation();
  const [uploadProfile] = useUpdateAccountMutation();

  // Obtener los datos del perfil del usuario y verificar si están cargando
  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });

  // Estados para los campos de nombre, apellido y dirección
  const [name, setName] = useState(userData?.name || '');
  const [surname, setSurname] = useState(userData?.surname || '');
  const [address, setAddress] = useState(userData?.address || '');

  // Cargar los datos del perfil en los estados cuando estén disponibles
  useEffect(() => {
    if (userData) {
      setName(userData.name || '');
      setSurname(userData.surname || '');
      setAddress(userData.address || '');
    }
  }, [userData]);

  // Realizar una consulta para actualizar los datos del perfil y cargar los estados cuando estén disponibles
  useGetProfileQuery({ localId }, {
    refetchOnMountOrArgChange: true,
    onSettled: (data) => {
      setName(data?.name || '');
      setSurname(data?.surname || '');
      setAddress(data?.address || '');
    },
  });

  // Manejar la selección de la imagen de perfil
  const onHandlerImage = async ({ uri, base64 }) => {
    await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` });
  };

  // Manejar la actualización de los datos del perfil
  const onHandlerData = async () => {
    Alert.alert('Datos guardados correctamente');
    await uploadProfile({ localId, name, surname, address });
    navigation.navigate('Perfil'); // Navegar de regreso a la pantalla de perfil
  }

  return (
    <View style={styles.container}>
      {isLoadingUserData && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
      <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage} style={styles.profileImg} />
      <View style={styles.infoContainer}>
        <Text>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nuevo nombre"
          placeholderTextColor={COLORS.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Text>Apellido:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nuevo apellido"
            placeholderTextColor={COLORS.gray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setName(text)}
            value={surname}
          />
          <Text>Dirección:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nueva direccion"
          placeholderTextColor={COLORS.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setName(text)}
            value={address}
          />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={onHandlerData}>
          <Text style={styles.btnText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
