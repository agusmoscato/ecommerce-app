import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { useGetProfileQuery } from '../../store/settings/api';
import { COLORS } from '../../themes';

/**
 * Componente que muestra el perfil del usuario.
 * Muestra la información del usuario, incluyendo su nombre, apellido, dirección y foto de perfil.
 */
const Profile = () => {
  const localId = useSelector((state) => state.auth.user.localId);
  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });

  const [name, setName] = useState(userData?.name || '');
  const [surname, setSurname] = useState(userData?.surname || '');
  const [address, setAddress] = useState(userData?.address || '');

  // Actualiza los estados al cargar los datos del usuario
  useEffect(() => {
    if (userData) {
      setName(userData.name || '');
      setSurname(userData.surname || '');
      setAddress(userData.address || '');
    }
  }, [userData]);

  // Refetch de la consulta de perfil al montar o al cambiar el argumento
  useGetProfileQuery({ localId }, {
    refetchOnMountOrArgChange: true,
    onSettled: (data) => {
      setName(data?.name || '');
      setSurname(data?.surname || '');
      setAddress(data?.address || '');
    },
  });

  return (
    <View style={styles.container}>
      {isLoadingUserData && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
      <Image
        source={{ uri: userData?.profileImage }}
        style={styles.imageBackground}
        resizeMethod="resize"
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
          <Text>Nombre:</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={name}
          />  
          <Text>Apellido:</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={surname}
          />
          <Text>Dirección:</Text>
          <TextInput
            style={styles.input}
            editable={false}
            value={address}
          />
      </View>
    </View>
  );
};

export default Profile;
