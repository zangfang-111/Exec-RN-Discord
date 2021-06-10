import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 8,
    paddingTop: 8
  },
  profileImage:{
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16
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
  containerStyle: {
    paddingHorizontal: 8
  },
  upload:{
   textAlign:"left",
   position:"absolute",
   marginTop:110,
   overflow:"visible",
   color: Colors.white,
   fontWeight:"600",
   fontSize:20,
   left:42

  },
  bookBtnViewStyle: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
  },
  inputContainer: {borderWidth: 1, borderColor: Colors.grey, marginTop: 8, paddingHorizontal: 8}
})
