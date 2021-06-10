import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  topBoxStyle: {
    backgroundColor: Colors.white,
    height: 100,

    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  leftBoxStyle: {
    width: 120,
    borderRightWidth: 1,
    borderRightColor: Colors.grey,
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
