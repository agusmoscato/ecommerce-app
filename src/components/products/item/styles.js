import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    paddingTop:20,
    margin:20,
    alignItems: 'center',
  },
  imageBackground: {
    width: 300,
    height: 200,
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: COLORS.white,
    letterSpacing:5,
    padding: 6,
    fontStyle: 'italic',
  },
  price:{
    fontSize: 25,
    color: COLORS.white,
    letterSpacing:4,
    padding: 6,    
  },
  textContainer:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    paddingTop:20,
    padding: 20,
    marginHorizontal: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },

});