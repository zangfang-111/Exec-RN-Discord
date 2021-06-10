import React from 'react'
import { useTheme } from '@/Theme'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SearchListItem = ({ title }) => {
  const { Gutters, Fonts } = useTheme()
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={Gutters.smallVMargin}
      onPress={() => navigation.navigate('ExploreHotelList')}
    >
      <Text style={[Fonts.textRegularSize, Fonts.textRegular]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SearchListItem
