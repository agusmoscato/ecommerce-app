import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { launchCameraAsync, requestCameraPermissionsAsync } from 'expo-image-picker';
import { TouchableOpacity, View, Image, Alert } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../themes';

/**
 * Componente para seleccionar una imagen desde la cámara.
 * 
 * @param {string} profileImage - La URL de la imagen de perfil actual.
 * @param {function} onSelect - Función que se ejecuta al seleccionar una imagen.
 * 
 * @returns {JSX.Element} Elemento JSX que permite seleccionar imágenes desde la cámara.
 */
const ImageSelector = ({ profileImage, onSelect }) => {
  const [image, setImage] = useState(null);

  /**
   * Verifica los permisos de la cámara y muestra una alerta si no se otorgan.
   * 
   * @returns {boolean} Verdadero si los permisos se otorgan, falso en caso contrario.
   */
  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'No tienes permisos',
        'Necesitas tener permisos en la cámara para usar esta aplicación.',
        [{ text: 'OK' }]
      );
      return false;
    }
    return true;
  };

  /**
   * Maneja la acción de tomar una foto desde la cámara.
   */
  const onHandleTakePhoto = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const result = await launchCameraAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [16, 16],
      quality: 0.5,
      base64: true,
    });

    await onSelect({ uri: result.assets[0].uri, base64: result.assets[0].base64 });
    setImage(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={onHandleTakePhoto}>
        {image || profileImage ? (
          <Image
            source={{ uri: image || profileImage }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Ionicons name="ios-camera" size={24} color={COLORS.primary} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImageSelector;
