import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    width: 100,
    height: 100,
    marginLeft: 12,
    marginRight: 12,

    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 8,
  },
})
