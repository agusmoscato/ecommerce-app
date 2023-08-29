import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  input:{
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: COLORS.black,
    fontSize: 14,
    height: 35,
    width: 250,
    marginVertical: 10,
  },
  containerButton:{
    alignSelf:'center',
    backgroundColor: COLORS.secondary,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  btnText:{
    color: COLORS.white,
  },
  infoContainer:{
    marginVertical: 30,
  },
});