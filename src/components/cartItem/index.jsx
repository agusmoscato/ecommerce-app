/**
 * Componente CartItem
 *
 * Un componente que muestra un elemento de un carrito de compras.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.backgroundColor - Color de fondo del contenedor de la imagen.
 * @param {string} props.id - ID del producto.
 * @param {number} props.categoryId - ID de la categoría del producto.
 * @param {string} props.title - Título del producto.
 * @param {number} props.price - Precio unitario del producto.
 * @param {number} props.discountPercentage - Porcentaje de descuento aplicado al producto.
 * @param {string} props.thumbnail - URL de la imagen del producto.
 * @param {number} props.quantity - Cantidad del producto en el carrito.
 * @param {number} props.stock - Cantidad disponible en el stock.
 * @param {Function} props.onIncrementQuantity - Función para aumentar la cantidad del producto en el carrito.
 * @param {Function} props.onDecrementQuantity - Función para disminuir la cantidad del producto en el carrito.
 * @param {Function} props.onRemoveFromCart - Función para remover el producto del carrito.
 * @returns {JSX.Element} - Elemento JSX que muestra los detalles de un producto en el carrito.
 */
const CartItem = ({
  backgroundColor,
  id,
  categoryId,
  title,
  price,
  discountPercentage,
  thumbnail,
  quantity,
  stock,
  onIncrementQuantity,
  onDecrementQuantity,
  onRemoveFromCart,
}) => {
  // Cálculo del precio total y precio con descuento del producto en el carrito
  const priceFinal = (price * quantity).toFixed(0);
  const priceDiscount = ((price - price * (discountPercentage / 100)) * quantity).toFixed(0);

  // Obtener datos de productos desde el estado global
  const products = useSelector((state) => state.products.data);
  const product = products.find((product) => product.id === id);

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, { backgroundColor: backgroundColor }]}>
        <Image source={{ uri: thumbnail }} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.qty}>{`Cantidad: ${quantity} | stock: ${stock}`}</Text>
        <Text style={styles.offer}>{`${discountPercentage}% descuento`} <Text style={styles.price}>${priceFinal}</Text></Text>
        <Text style={styles.priceDiscount}>${priceDiscount}</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.increaseButton} onPress={() => onIncrementQuantity(product)}>
            <Text style={styles.increaseButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.decreaseButton} onPress={() => onDecrementQuantity(product)}>
            <Text style={styles.decreaseButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRemoveFromCart(product)} style={styles.deleteButton}>
            <Ionicons name="trash" size={14} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
