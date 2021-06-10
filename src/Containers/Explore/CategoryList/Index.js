import React, { useEffect, useState, useRef } from 'react'
import { useTheme } from '@/Theme'
import { Text, FlatList, StatusBar, Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BasicSwiper, SearchFilterSheet } from '@/Components'
import { CategoryListData } from '@/Config'

import { styles } from './styles'

const CategoryListContainer = ({route }) => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()
  const navigation = useNavigation()
  const RBSheetRef = useRef()

  useEffect(() => {
    navigation.setOptions({
      title: Platform.OS === 'ios' ? '' : route.params.title,
      // headerTitleStyle: [
      //   Fonts.textRegularSize,
      //   Fonts.textRegular,
      //   { marginTop: 2 },
      // ],
      headerTintColor: Colors.black,
      headerBackImage: () => (
        <Icon
          name="angle-left"
          type="font-awesome"
          color={Colors.Black}
          onPress={() => navigation.navigate('ExploreMain')}
          size={33}
        />
      ),
      headerBackTitle: route.params.title,
      headerBackTitleStyle: [
        Fonts.textRegular,
        Fonts.textRegularSize,
        Gutters.smallLMargin,
        { marginTop: 3 },
      ],
      headerLeftContainerStyle: { paddingLeft: 10 },
      headerRight: () => (
        <Icon
          name="filter-outline"
          type="ionicon"
          color={Colors.Black}
          size={25}
          onPress={() => RBSheetRef.current.open()}
        />
      ),
      headerRightContainerStyle: { paddingRight: 10 },
    })
  }, [])

  const onClickItem = () => {
    navigation.navigate('FavoriteDetail')
  }

  return (
    <>
      <SafeAreaView
        style={[Layout.fill, styles.container]}
        edges={['right', 'left']}
      >
        <StatusBar hidden />
        <Text
          style={[
            Fonts.textRegular,
            Fonts.textRegularSize,
            Gutters.smallVMargin,
            Gutters.mediumLMargin,
          ]}
        >
          100 {route.params.title}S
        </Text>
        <FlatList
          data={CategoryListData}
          renderItem={({ item }) => {
            return <BasicSwiper listData={item} onClickItem={onClickItem} />
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <SearchFilterSheet ref={RBSheetRef} />
    </>
  )
}

export default CategoryListContainer
