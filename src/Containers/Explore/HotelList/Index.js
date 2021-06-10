import React, { useEffect, useState, useRef } from 'react'
import { useTheme } from '@/Theme'
import { Text, FlatList, StatusBar, Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BasicSwiper, SearchFilterSheet } from '@/Components'
import { HotelsListData } from '@/Config'

import { styles } from './styles'

const HotelListContainer = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()
  const navigation = useNavigation()
  const RBSheetRef = useRef()

  useEffect(() => {
    navigation.setOptions({
      title: Platform.OS === 'ios' ? '' : 'New York Hotels',
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
      headerBackTitle: 'New York Hotels',
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
    navigation.navigate('ExploreHotelDetail')
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
          100 Hotels
        </Text>
        <FlatList
          data={HotelsListData}
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

export default HotelListContainer
