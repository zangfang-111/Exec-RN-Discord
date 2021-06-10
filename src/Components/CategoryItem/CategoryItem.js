import React from 'react'
import { useTheme } from '@/Theme'
import { Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const CategoryItem = ({ item }) => {
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
      onPress={() => { if (item.title == "HOTELS"){
        navigation.navigate('ExploreHotels')
      } else {
        navigation.navigate('CategoryListContainer', { title: item.title })
      }}}
    >
      <Image source={item.icon} style={[Gutters.regularTMargin]} />
      <Text
        style={[
          Fonts.textRegular,
          Fonts.textCenter,
          Fonts.textTiny,
          Gutters.regularTMargin,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryItem
