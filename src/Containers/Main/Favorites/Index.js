import React from 'react'
import { useTheme } from '@/Theme'
import { Platform, Text, FlatList, SafeAreaView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BasicSwiper } from '@/Components'
import { SwiperData } from '@/Config'
import { styles } from './styles'

const FavoritesContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()
  const navigation = useNavigation()
  const onClickItem = () => {
    navigation.navigate('ExploreHotelDetail')
  }

  return (
    <SafeAreaView
      style={[Layout.fill, styles.container]}
      edges={['right', 'left']}
    >
      <StatusBar hidden />
      <Text
        style={[
          Fonts.textRegular,
          Fonts.textMedium,
          Platform.OS === 'ios' ? Gutters.smallTMargin : Gutters.mediumTMargin,
          Gutters.mediumBMargin,
          Gutters.mediumLMargin,
        ]}
      >
        Favorites old
      </Text>
      <FlatList
        data={SwiperData}
        renderItem={({ item }) => {
          return <BasicSwiper listData={item} onClickItem={onClickItem} />
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

export default FavoritesContainer
