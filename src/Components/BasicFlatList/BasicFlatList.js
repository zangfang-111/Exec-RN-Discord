import React from 'react'
import { useTheme } from '@/Theme'
import { Text, View, FlatList } from 'react-native'
const BasicFlatList = ({
  horizontal,
  title,
  _renderItem,
  listData,
  keyObject = 'title',
  separatorComponent,
}) => {
  const { Fonts, Gutters } = useTheme()
  return (
    <View style={[Gutters.mediumHMargin]}>
      <Text style={[Fonts.textMedium, Fonts.textBlack, Fonts.textRegular]}>
        {title}
      </Text>
      <FlatList
        horizontal={horizontal}
        // pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={listData}
        keyExtractor={(item) => item[keyObject]}
        renderItem={_renderItem}
        ItemSeparatorComponent={separatorComponent}
      />
    </View>
  )
}

export default BasicFlatList
