import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: Colors.white,
    position: 'relative',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 15,
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
})
