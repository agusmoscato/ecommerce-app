import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
  container:{flex : 1},
  productContainer:{
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 1,
    width: '95%',
    marginHorizontal: 10,
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 4,
  },
  imageBackground: {
    height: 175,
    width: '40%',
  },
  text: {
    fontSize: 14,
    color: COLORS.textGray,
    letterSpacing:3,
    padding: 6,
    fontStyle: 'italic',
  },
  masInfo:{
    fontSize: 14,
    color: COLORS.textGray,
    letterSpacing:3,
    padding: 6,
    fontStyle: 'italic',
    alignSelf:'center',
  },
  price: {
    fontSize: 18,
    color: COLORS.textGray,
    letterSpacing: 4,
    paddingHorizontal: 6, 
    textDecorationLine: 'line-through'
  }, 
  textContainer:{
    alignSelf:'center',
    alignItems: 'flex-end',
  },
  priceDiscount: {
    fontSize: 20,
    color: COLORS.text,
    letterSpacing:4,
    paddingHorizontal: 6,
  },
  offer: {
    fontSize: 14,
    color: 'green',
    letterSpacing: 4,
    paddingHorizontal: 6, 
  },
});