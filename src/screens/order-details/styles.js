import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  headerInfo:{
    margin: 15,
    borderRadius: 10,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: COLORS.text,
    letterSpacing:3,
    paddingHorizontal: 8,
  },
  itemImage:{
    width: 100,
    height: 100,
    margin: 10,
  },
  container:{
    flex: 1,
  },
  itemContainer: {
    margin: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    flexDirection: 'row',
  },
  content: {
    justifyContent: 'space-around',
  },
  itemTitle:{
    fontSize: 24,
    color: COLORS.text,
    letterSpacing:3,
  },
  itemQuantity: {
    fontSize: 14,
    color: COLORS.textGray,
    letterSpacing:3,
  },
  itemPrice: {
    fontSize: 14,
    color: COLORS.text,
    letterSpacing: 4,
  },
  totalOrder:{
    margin: 10,
    alignItems: 'center',
    
  },
});