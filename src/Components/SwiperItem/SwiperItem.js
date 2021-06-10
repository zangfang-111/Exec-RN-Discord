import React from 'react'
import { useTheme } from '@/Theme'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import { styles } from './styles'

const SwiperItem = ({ data, category, onClickItem }) => {
  const { Layout, Gutters, Fonts } = useTheme()
  return (
    <TouchableOpacity onPress={onClickItem}>
      <ImageBackground
        source={{ uri: data.image }}
        style={[
          Layout.fullSize,
          styles.containerStyle,
          Layout.center,
          Gutters.largeHPadding,
        ]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.categoryStyle}>{category}</Text>
          <Text
            style={[styles.titleStyle, Gutters.smallTMargin]}
            numberOfLines={2}
          >
            {data.title}
          </Text>
          {category === 'HOTELS' && (
            <>
              <View style={[styles.hairlineStyle, Gutters.smallVMargin]} />
              <Text
                style={[Fonts.textSmall, Fonts.textBold, Fonts.textPrimary]}
              >
                {data.subTitle}
              </Text>
            </>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default SwiperItem
