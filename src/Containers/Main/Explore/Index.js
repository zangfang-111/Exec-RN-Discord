import React, { useState } from 'react'
import { useTheme } from '@/Theme'
import { View, ScrollView, Text, StatusBar, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Categories, Recommendation, mainSlideData } from '@/Config'
import { styles } from './styles'

import {
  MainSlidebox,
  Searchbox,
  CategoryItem,
  ProductItem,
  BasicCarousel,
  BasicFlatList,
} from '@/Components'

const SLIDER_WIDTH = Dimensions.get('window').width

const ExploreContainer = () => {
  const { Layout, Gutters } = useTheme()
  const navigation = useNavigation()
  const onSearchPress = () => {
    navigation.navigate('SearchContainer')
  }

  return (
    <SafeAreaView
      style={[Layout.fill, styles.container]}
      edges={['right', 'left']}
    >
      <StatusBar hidden />
      <ScrollView>
        <MainSlidebox listData={mainSlideData} />
        <Searchbox onSearchPress={onSearchPress} />
        <BasicFlatList
          horizontal
          title="Categories"
          _renderItem={({ item }) => <CategoryItem item={item} />}
          listData={Categories}
        />
        <BasicCarousel
          title="For You"
          _renderItem={({ item, index }, parallaxProps) => (
            <ProductItem
              item={item}
              index={index}
              itemWidth={Math.round(SLIDER_WIDTH * 0.8)}
              itemHeight={Math.round((Math.round(SLIDER_WIDTH * 0.5) * 3) / 4)}
              parallaxProps={parallaxProps}
              onSearchPress={() => navigation.navigate('FavoriteDetail')}
            />
          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={Math.round(SLIDER_WIDTH * 0.8)}
          itemHeight={Math.round((Math.round(SLIDER_WIDTH * 0.7) * 3) / 4)}
          listData={Recommendation}
        />
        <BasicCarousel
          title="Popular"
          _renderItem={({ item, index }, parallaxProps) => (
            <ProductItem
              item={item}
              index={index}
              itemWidth={Math.round(SLIDER_WIDTH * 0.6)}
              itemHeight={Math.round((Math.round(SLIDER_WIDTH * 0.7) * 3) / 4)}
              parallaxProps={parallaxProps}
            />
          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={Math.round(SLIDER_WIDTH * 0.6)}
          itemHeight={Math.round((Math.round(SLIDER_WIDTH * 0.7) * 3) / 4)}
          listData={Recommendation}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ExploreContainer
