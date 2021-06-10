import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    width: 128,
    height: 59,
    marginRight: 14,
    position: 'relative',
  },
  titleStyle: {
    position: 'absolute',
    bottom: 0,
    left: 12,
  },
})
