import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  logoContainer: {
    marginTop: -70,
  },
  formContainer: {
    marginTop: 60,
  },
  inputContainer: {
    marginTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  labelStyle: {
    fontFamily: 'ProximaNova-Regular',
    color: Colors.white,
  },
  inputStyle: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'ProximaNova-Regular',
  },
  inputContainerStyle: {
    height: 53,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  submitButton: {
    marginTop: 30,
  },
  forgotpassword: {
    textAlign: 'center',
    marginTop: 27,
    fontSize: 14,
    color: Colors.COLOR_PRIMARY,
  },
})
