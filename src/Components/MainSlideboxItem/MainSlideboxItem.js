import React from 'react'
import { useTheme } from '@/Theme'
import { Text, ImageBackground } from 'react-native'

import { styles } from './styles'

const MainSlideboxItem = ({ data }) => {
  const { Layout, Gutters, Fonts } = useTheme()
  return (
    <ImageBackground
      source={{ uri: data.image }}
      style={[
        Layout.fullSize,
        styles.containerStyle,
        Layout.center,
        Gutters.largeHPadding,
      ]}
    >
      <Text style={[styles.titleStyle, Fonts.textLarge, Fonts.textCenter]}>
        {data.title}
      </Text>
      <Text
        style={[styles.subTitleStyle, Fonts.textCenter, Gutters.mediumVMargin]}
      >
        {data.subTitle}
      </Text>
    </ImageBackground>
  )
}

export default MainSlideboxItem
