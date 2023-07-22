import { StyleSheet } from 'react-native';
import {COLORS} from '../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
    margin: 20, 
  },
  ordersTextTitle: {
    fontSize: 18,
    color: COLORS.text,
    letterSpacing:3,
    padding: 6,
    fontStyle: 'italic',
    alignSelf:'center',
  },
  ordersTextDesc: {
    fontSize: 14,
    color: COLORS.textGray,
    letterSpacing:3,
    padding: 6,
    fontStyle: 'italic',
  },
});