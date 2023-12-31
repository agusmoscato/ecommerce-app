import { StyleSheet } from 'react-native';
import {COLORS} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginVertical: 10,
  },
  containerButton:{
    alignSelf:'center',
    margin: 15,
    backgroundColor: COLORS.secondary,
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
    marginHorizontal: 20, 
  },
  notFoundTextTitle: {
      fontSize: 18,
      color: COLORS.text,
      letterSpacing:3,
      padding: 6,
      fontStyle: 'italic',
      
    },
   notFoundTextDesc: {
     fontSize: 14,
     color: COLORS.textGray,
     letterSpacing:3,
     padding: 6,
     fontStyle: 'italic',
     textAlign: 'center',
     
   },
   priceTotal:{
     fontSize: 18,
     color: COLORS.text,
     letterSpacing:2,   
     alignSelf:'center',
  },
});