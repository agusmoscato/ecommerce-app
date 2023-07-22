import { SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './navigation';
import { store } from './store/';
import { Provider } from 'react-redux'; 

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigator/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});