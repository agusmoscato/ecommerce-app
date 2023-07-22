import { FlatList, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { CategoryItem } from '../../components';
import {useSelector} from 'react-redux';

function Categories({navigation}) {
  
  const categories = useSelector ((state) => state.categories.data);

  const onSelectCategory = ({ categoryId}) => {
    navigation.navigate('Productos', {categoryId});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={categories}
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