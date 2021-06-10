import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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
    color: Colors.black,
    fontWeight: '400',
  },
  inputStyle: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: 'ProximaNova-Regular',
  },
  inputContainerStyle: {
    height: 53,
    borderWidth: 1,
    borderColor: '#E2E2E2',
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
  overlayViewStyle: {
    width: 250,
    height: 250,
  },
})
