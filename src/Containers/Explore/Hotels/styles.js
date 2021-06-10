import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  topBackgroundStyle: {
    height: 300,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  topTitle: {
    marginTop: 100,
  },
  searchBoxStyle: {
    marginTop: 70,
  },
  backIconStyle: {
    position: 'absolute',
    top: 50,
    left: 10,
  },
})
