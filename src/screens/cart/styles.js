import { StyleSheet } from 'react-native';
import {COLORS} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  containerButton:{
    alignSelf:'center',
    margin: 15,
    backgroundColor: COLORS.primary,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  addToCartText:{
    color: COLORS.white,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
    margin: 20, 
  },
  notFoundTextTitle: {
      fontSize: 18,
      color: COLORS.text,
      letterSpacing:3,
      padding: 6,
      fontStyle: 'italic',
      alignSelf:'center',
    },
    notFoundTextDesc: {
      fontSize: 14,
      color: COLORS.textGray,
      letterSpacing:3,
      padding: 6,
      fontStyle: 'italic',
    },
    priceTotal:{
      fontSize: 18,
      color: COLORS.text,
      letterSpacing:2,   
      alignSelf:'center',
  },
});