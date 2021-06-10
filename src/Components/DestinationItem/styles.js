import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    width: 120,
    height: 200,
    marginRight: 12,
    position: 'relative',
  },
  titleStyle: {
    position: 'absolute',
    bottom: 0,
    left: 12,
  },
})
