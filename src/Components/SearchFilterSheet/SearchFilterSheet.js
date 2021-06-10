import React, { useState } from 'react'
import { useTheme } from '@/Theme'
import { View, Text, TouchableOpacity } from 'react-native'
import { CheckBox, Button } from 'react-native-elements'
import RBSheet from 'react-native-raw-bottom-sheet'
import { BasicSectionList, SearchListItem } from '@/Components'
import { SearchFilterData } from '@/Config'
import { styles } from './styles'
import { Dimensions } from 'react-native'

const FilterItem = ({ title }) => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()
  const [checked, setChecked] = useState(false)

  return (
    <CheckBox
      title={title}
      iconRight
      iconType="material"
      checkedIcon="done"
      uncheckedIcon={null}
      checkedColor={Colors.primary}
      checked={checked}
      textStyle={[
        Layout.fill,
        Fonts.textRegular,
        Fonts.textSmall,
        styles.textStyle,
      ]}
      containerStyle={styles.checkboxContainerStyle}
      onPress={() => setChecked(!checked)}
    />
  )
}

const SearchFilterSheet = React.forwardRef((props, ref) => {
  const { Layout, Gutters, Fonts } = useTheme()
  return (
    <RBSheet
      ref={ref}
      height={Dimensions.get('screen').height/1.5}
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <View style={[Layout.fill, Layout.fullWidth]}>
        <BasicSectionList
          listData={SearchFilterData}
          _renderItem={({ item }) => <FilterItem title={item} />}
        />
        <View
          style={[
            styles.bookBtnViewStyle,
            Gutters.smallVPadding,
            Gutters.mediumHPadding,
          ]}
        >
          <Button
            title="APPLY"
            type="outline"
            titleStyle={[
              styles.bookTitleStyle,
              Fonts.textRegularSize,
              Fonts.textBold,
            ]}
            buttonStyle={[styles.bookButtonStyle, Gutters.mediumVPadding]}
            containerStyle={[styles.containerStyle, Gutters.smallVMargin]}
          />
        </View>
      </View>
    </RBSheet>
  )
})

export default SearchFilterSheet
