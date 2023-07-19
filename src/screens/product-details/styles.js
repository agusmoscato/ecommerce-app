import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  containerImage: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    marginHorizontal: 20,
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 4,
    padding: 15,
    margin: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: { 
    fontSize: 35,
    color: COLORS.text,
    letterSpacing:3,
    paddingHorizontal: 8,
  },
  description: {
    fontSize: 14,
    color: COLORS.textGray,
    letterSpacing:3,
    padding: 8,
  },
  category: {
    fontSize: 14,
    color: COLORS.textGray,
    letterSpacing: 4,
    paddingHorizontal: 6, 
  },
  price: {
    fontSize: 18,
    color: COLORS.textGray,
    letterSpacing: 4,
    paddingHorizontal: 6, 
    textDecorationLine: 'line-through'
  },
  offer: {
    fontSize: 18,
    color: 'green',
    letterSpacing: 4,
    paddingHorizontal: 6, 
  },
  priceDiscount: {
    fontSize: 30,
    color: COLORS.text,
    letterSpacing:4,
    paddingHorizontal: 6,    
  },
});