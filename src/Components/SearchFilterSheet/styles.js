import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  checkboxContainerStyle: {
    backgroundColor: Colors.transparent,
    borderWidth: 0,
    paddingLeft: 0,
    marginLeft: 0,
    paddingRight: 0,
    marginRight: 0,
    marginBottom: 5,
    paddingBottom: 0,
  },
  textStyle: {
    fontWeight: '400',
    fontSize: 18,
  },
  bookButtonStyle: {
    backgroundColor: Colors.primary,
    borderColor: Colors.white,
  },
  bookTitleStyle: {
    color: Colors.white,
  },
  bookBtnViewStyle: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
  },
})
