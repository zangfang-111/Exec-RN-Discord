import React from 'react'
import { useTheme } from '@/Theme'
import { Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const DestinationItem = ({ item }) => {
  const { Fonts, Gutters, Layout, Colors } = useTheme()
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[
        styles.container,
        Gutters.mediumVMargin,
        Layout.col,
        Layout.justifyContentCenter,
        Layout.alignItemsCenter,
      ]}
      onPress={() => navigation.navigate('ExploreHotelList')}
    >
      <Image source={item.background} style={[Gutters.regularTMargin]} />
      <Text
        style={[
          Fonts.textSmall,
          Fonts.textRegular,
          Fonts.textCenter,
          Fonts.textWhite,
          Gutters.regularTMargin,
          styles.titleStyle,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  )
}

export default DestinationItem
