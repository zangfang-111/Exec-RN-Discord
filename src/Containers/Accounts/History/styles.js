import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 8,
  },
  main:{
    flex:1,
    marginVertical:10
  },
  countTextView: {
      backgroundColor: Colors.secondary,
      width: '100%',
      textAlign:"center",
      paddingVertical:10,
      marginVertical:10,
  },
  listStyle: {
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 8,
    margin: 8
  },
  titleLineStyle: {
    height: 1,
    backgroundColor: Colors.primary,
  },
})
