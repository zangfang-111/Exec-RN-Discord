import { StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.white,
    fontFamily: 'ProximaNova-Regular',

    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 0,
  },
  containerStyle: {
    backgroundColor: Colors.transparent,
    marginTop: -40,
    
  },
  titleStyle: {
    color: Colors.black,
  },
})
