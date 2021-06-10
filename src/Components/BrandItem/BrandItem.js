import React from 'react'
import { useTheme } from '@/Theme'
import { Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const BrandItem = ({ item }) => {
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
      // onPress={() => navigation.navigate('ExploreHotels')}
    >
      <Image source={item.brand} style={[Gutters.regularTMargin]} />
    </TouchableOpacity>
  )
}

export default BrandItem
