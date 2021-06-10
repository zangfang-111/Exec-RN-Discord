import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
export const styles = StyleSheet.create({
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 15,
    marginLeft: 10,
    marginBottom: 40,
  },
  paginationStyle: {
    bottom: undefined,
    left: 10,
    bottom: 10,
    right: undefined,
  },
  containerStyle: {
    backgroundColor: Colors.black,
    position: 'relative',
  },
})
