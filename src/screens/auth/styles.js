import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    color: COLORS.text,
  },
  
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: COLORS.secondary,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
  },


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.text,
    paddingVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: COLORS.black,
    fontSize: 14,
    height: 35,
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
  btnText:{
    color: COLORS.white,
  },
});