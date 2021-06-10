import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  backgroundStyle: {
    position: 'relative',
  },
  backgroundImageStyle: {
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: -300,
  },
  roundBackgroundStyle: {
    width: '85%',
    height: '87%',
    backgroundColor: Colors.black,
    borderRadius: 15,
    position: 'relative',
    paddingTop: 70,

    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  textContainer: {
    marginTop: 120,
  },
  bigBallStyle: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
})
