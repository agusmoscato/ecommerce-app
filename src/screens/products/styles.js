import { StyleSheet } from 'react-native';
import {COLORS} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
  },
  notFoundText: {
      fontSize: 14,
      color: COLORS.textGray,
      letterSpacing:3,
      padding: 6,
      fontStyle: 'italic',
      alignSelf:'center',
  },
  products:{
    flex:1,
  },
  productsContent: {
    paddingVertical: 25,
    gap: 15,
  },
});