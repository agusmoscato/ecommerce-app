/**
 * Componente para mostrar un ítem de categoría.
 *
 * @param {string} id - ID de la categoría.
 * @param {string} name - Nombre de la categoría.
 * @param {string} backgroundColor - Color de fondo de la categoría.
 * @param {string} backgroundImage - URL de la imagen de fondo de la categoría.
 * @param {function} onSelectCategory - Función para manejar la selección de la categoría.
 * @returns {JSX.Element} Componente de ítem de categoría.
 */
import { TouchableHighlight, ImageBackground, Text } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../../themes";

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory }) => {
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
      underlayColor={COLORS.primary}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.imageBackground}
        resizeMode="cover">
        <Text style={styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItem;
