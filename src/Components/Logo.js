import React from 'react'
import { View, Image, Text } from 'react-native'
import { useTheme } from '@/Theme'
const Logo = () => {
  const { Layout, Images, Gutters, Fonts } = useTheme()

  return (
    <View style={Layout.rowCenter}>
      <Image source={Images.logo} />
      <Text style={[Fonts.textWhite, Fonts.textMedium, Gutters.regularLMargin]}>
        EXEC
      </Text>
    </View>
  )
}

export default Logo
