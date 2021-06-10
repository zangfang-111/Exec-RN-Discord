import React from 'react'
import { useTheme } from '@/Theme'
import { Image, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const SubAccountItem = ({ item }) => {
  const { Fonts, Gutters, Layout, Colors } = useTheme()
  const navigation = useNavigation()
  return (
    <View
      style={[
        Layout.fill,
        Layout.fullWidth,
        Layout.row,
        Layout.justifyContentBetween,
        Layout.alignItemsCenter,
        // Gutters.smallVMargin,
      ]}
    >
      <View>
        <Text style={[Fonts.textBold, Fonts.textRegularSize]}>{item.name}</Text>
        <Text
          style={[
            Fonts.textRegular,
            Fonts.textRegularSize,
            Gutters.smallTMargin,
          ]}
        >
          {item.email}
        </Text>
        <Text
          style={[Fonts.textTiny, Gutters.smallTMargin, styles.joinedDateStyle]}
        >
          {item.joinedDate}
        </Text>
      </View>
      <View>
        <Button
          title="DELETE"
          type="outline"
          titleStyle={[styles.bookTitleStyle, Fonts.textSmall, Fonts.textBold]}
          buttonStyle={[styles.bookButtonStyle, Gutters.smallVPadding]}
          containerStyle={styles.containerStyle}
        />
      </View>
    </View>
  )
}

export default SubAccountItem
