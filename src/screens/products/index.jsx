import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';

import { styles } from './styles';
import { Input, ProductItem } from '../../components';
import PRODUCTS from '../../constants/data/products.json';
import { COLORS } from '../../themes';

function Product({ onHandleGoBack, categoryId }) {
  const [search, setSearch] = useState('');
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const onHandleBlur = () => {};
  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandleFocus = () => {};

  const deleteSearch = () =>{setSearch('')};

  const filteredProductsByCategory = PRODUCTS.filter((product) => product.categoryId === categoryId);

  const filterBySearch =(query)=>{
    let updatedProductList = [...filteredProductsByCategory]
    updatedProductList = updatedProductList.filter((product) =>{
      return (product.title.toLowerCase().indexOf(query.toLowerCase())!== -1)
    });
    setFilteredProducts(updatedProductList);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back-circle" size={30} color={COLORS.black}/>
        <Text style={styles.goBackText}>Volver a categorias</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Buscar"
          borderColor={borderColor}
        />
        {search.length > 0 && <Ionicons name="close-circle" size={40} color={COLORS.black} onPress={deleteSearch}/>}
      </View>
      <FlatList
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) =><ProductItem {...item}/>}
        keyExtractor={(item) => item.id.toString()}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No se han encontrado productos</Text>
        </View>
      )}
    </View>
  );
}

export default Product;