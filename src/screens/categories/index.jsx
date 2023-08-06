import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { CategoryItem } from '../../components';
import { COLORS } from '../../themes';
import { useGetCategoriesQuery } from '../../store/categories/api';

function Categories({navigation}) {
  const {data,isLoading} = useGetCategoriesQuery();
  const onSelectCategory = ({ categoryId}) => {
    if (categoryId == 0){
      categoryId = '';
      navigation.navigate('Productos', {categoryId})
    }
    else{
      navigation.navigate('Productos', {categoryId});
    }
  };
  if (isLoading)
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          renderItem={({ item }) => <CategoryItem {...item} onSelectCategory={()=>onSelectCategory({categoryId: item.id})} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;