import React, { useState } from 'react'
import { useTheme } from '@/Theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, StatusBar, Platform } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { BasicSectionList, SearchListItem } from '@/Components'

import { SearchListData } from '@/Config'

import { styles } from './styles'
const SearchContainer = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()
  const navigation = useNavigation()
  const [searchValue, setSearchValue] = useState('')

  return (
    <SafeAreaView
      style={[Layout.fill, styles.container, Gutters.largeBPadding]}
      edges={['top', 'right', 'left']}
    >
      <StatusBar hidden />
      <View style={styles.searchBarStyle}>
        <SearchBar
          platform={Platform.OS}
          onChangeText={(value) => setSearchValue(value)}
          value={searchValue}
          placeholder="Search for city"
          inputStyle={[styles.inputStyle, Fonts.textRegularSize]}
          inputContainerStyle={styles.inputContainerStyle}
          onCancel={() => navigation.goBack()}
          cancelButtonProps={{
            color: Colors.black,
            buttonTextStyle: [Fonts.textRegularSize, Fonts.textRegular],
          }}
          searchIcon={{ color: Colors.black, size: 25 }}
          containerStyle
          showCancel
          lightTheme
          round
        />
      </View>
      <BasicSectionList
        listData={SearchListData}
        _renderItem={({ item }) => <SearchListItem title={item} />}
      />
    </SafeAreaView>
  )
}

export default SearchContainer
