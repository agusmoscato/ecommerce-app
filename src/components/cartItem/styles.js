import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 175,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    marginHorizontal: 5,
    marginBottom: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageContainer: {
    maxWidth: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
  detailContainer: {
    justifyContent: 'space-between',
    maxWidth: 190,
    gap: 5,
  },
  name: {
    fontSize: 16,
    color: COLORS.text,
    letterSpacing:3,
  },
  price: {
    fontSize: 13,
    color: COLORS.textGray,
    letterSpacing: 4,
    paddingHorizontal: 6, 
    textDecorationLine: 'line-through'
  },
  offer: {
    fontSize: 13,
    color: 'green',
    letterSpacing: 2,
    textDecorationLine: 'none',
  },
  priceDiscount: {
    fontSize: 18,
    color: COLORS.text,
    letterSpacing:2,    
  },
  qty: {
    fontSize: 12,
    color: COLORS.text,
  },
  actionContainer: {
    gap: 20,
    flexDirection: 'row',
  },
  increaseButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
  },
  increaseButtonText: {
    color: COLORS.white,
    fontSize: 14,
  },
  decreaseButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  decreaseButtonText: {
    color: COLORS.white,
    fontSize: 14,
  },
  deleteButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },

});