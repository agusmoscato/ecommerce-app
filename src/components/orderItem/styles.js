import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  orderItemContainer: {
    flex: 1,
    height: 145,
    width: '90%',
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 15,
    marginVertical: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#E4E5EC',
    borderWidth: 2,
    flexDirection: 'row',
  },
  orderHeaderContainer: {
    height: '100%',
    backgroundColor: '#ACADBC',
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    borderColor: '#E4E5EC',
    //borderRightWidth: 2,
    borderWidth: 2,
  },
  orderHeaderModule:{
    alignItems: 'center'
  },
  orderHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  orderBody: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center', 
    alignContent: 'center',
  },
  orderItemText: {
    fontSize: 20,
    color: COLORS.text,
  },
  masInfo:{
    fontSize: 14,
    color: COLORS.textGray,
    padding: 6,
    fontStyle: 'italic',
  },
});