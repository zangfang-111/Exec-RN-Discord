import React from 'react'
import { useTheme } from '@/Theme'
import { Text, SectionList } from 'react-native'
import { Divider } from 'react-native-elements'
const BasicSectionList = ({ _renderItem, listData }) => {
  const { Fonts, Gutters } = useTheme()
  return (
    <SectionList
      style={[Gutters.mediumHMargin]}
      sections={listData}
      keyExtractor={(item, index) => item + index}
      renderItem={_renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={[Fonts.textTiny, Fonts.textBold, Gutters.mediumTMargin]}>
          {title}
        </Text>
      )}
      renderSectionFooter={({ section }) => {
        const index = listData.indexOf(section)
        return index === 1 ? null : <Divider style={[Gutters.smallVMargin]} />
      }}
    />
  )
}

export default BasicSectionList
