import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    // borderRadius: 5,
    width: '100%',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 20
    // height: 200,
    // marginRight: 12,
    // position: 'relative',
  },
  titleStyle: {
    // position: 'absolute',
    // bottom: 0,
    // left: 12,
  },
  imageStyle: {
      width: 72,
      height: 72
  },
  
  bookButtonStyle: {
    backgroundColor: Colors.primary,
    borderColor: Colors.white,
    paddingVertical:10,
  },
  bookTitleStyle: {
    color: Colors.white,
    paddingHorizontal: 8,

  },
  bookBtnViewStyle: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
  },
  containerStyle: {
    //   height: 40
  }
  
  
  
})
