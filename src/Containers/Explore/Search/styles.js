import { Platform, StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  inputStyle: {
    backgroundColor: Colors.white,
    borderRightWidth: Platform.OS === 'ios' ? 1 : 0,
    borderRightColor: Colors.grey,
  },
  inputContainerStyle: {
    backgroundColor: Colors.white,
  },
  searchBarStyle: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
})
