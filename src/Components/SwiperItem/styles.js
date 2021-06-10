import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.black,
    position: 'relative',
  },
  textContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  categoryStyle: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 10,
    color: Colors.white,
    alignSelf: 'flex-start',
  },
  titleStyle: {
    fontSize: 17,
    color: Colors.white,
  },
  hairlineStyle: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255 ,0.3)',
    alignSelf: 'stretch',
  },
})
