import React, { useState } from 'react'
import { useTheme } from '@/Theme'
import { View, Text, StatusBar, ImageBackground, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Logo } from '@/Components'

import { styles } from './styles'

const CardContainer = () => {
  const { Layout, Gutters, Images, Colors, Fonts } = useTheme()
  return (
    <SafeAreaView
      style={[Layout.fill, styles.container, Gutters.mediumBPadding]}
      edges={['top', 'right', 'left']}
    >
      <StatusBar hidden />
      <ImageBackground
        source={Images.cardBackground}
        style={[
          Layout.fullSize,
          styles.backgroundStyle,
          Layout.center,
          Gutters.smallVMargin,
        ]}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={[styles.roundBackgroundStyle]}>
          <Logo />
          <View style={[Layout.fill, Layout.colVCenter, styles.textContainer]}>
            <Text style={[Fonts.textBold, Fonts.textWhite, Fonts.titleMedium]}>
              John Smith
            </Text>
            <Text style={[Fonts.textRegular, Fonts.textGrey]}>
              Forbes Council
            </Text>
            <Text
              style={[
                Fonts.textBold,
                Gutters.largeTMargin,
                Fonts.textPrimary,
                Fonts.titleSmall,
              ]}
            >
              1234 5678 9000
            </Text>
            <Image
              source={Images.bigBall}
              resizeMode="contain"
              style={styles.bigBallStyle}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default CardContainer
