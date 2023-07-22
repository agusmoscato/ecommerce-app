import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { Input, ProductItem } from '../../components';
import { COLORS } from '../../themes';

import {useSelector} from 'react-redux';


function Product({route,navigation}) {
  const {categoryId} = route.params;

  const products = useSelector ((state) => state.products.data);

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

  const filteredProductsByCategory = products.filter((product) => categoryId === 0 ? products : product.categoryId === categoryId);

  const filterBySearch =(query)=>{
    let updatedProductList = [...filteredProductsByCategory]
    updatedProductList = updatedProductList.filter((product) =>{
      return (product.title.toLowerCase().indexOf(query.toLowerCase())!== -1)
    });
    setFilteredProducts(updatedProductList);
  };
  const onSelectProduct = ({ productId, name }) => {
    navigation.navigate('Detalles del producto', { productId, name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Buscar"
          borderColor={borderColor}
          />
          {search.length > 0 && <Ionicons name="close-circle" size={30} color={COLORS.black} onPress={deleteSearch}/>}
      </View>
      <FlatList
        style={styles.products}
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item}) =><ProductItem {...item} onSelectProduct={onSelectProduct}/>}
        contentContainerStyle={styles.productsContent}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
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