import { StyleSheet } from 'react-native'

import { Colors } from '@/Theme/Variables'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
      },
      checkboxContainer: {
        flexDirection: "column",
        alignItems: 'flex-start',
      },
      checkbox: {
        alignSelf: "center",
      },
      containerStyle: {
        borderRadius: 0,
        paddingLeft: 20, paddingTop: 20
      },
      bookButtonStyle: {
        backgroundColor: Colors.primary,
        borderColor: Colors.white,
        paddingHorizontal: 24
      },
      bookTitleStyle: {
        color: Colors.white,
      },
})
