import React from 'react'
import { useTheme } from '@/Theme'
import { Button, Icon } from 'react-native-elements'
import { styles } from './styles'

const Searchbox = ({
  title = 'Search for cities or benefits',
  onSearchPress,
}) => {
  const { Gutters, Layout } = useTheme()
  return (
    <Button
      title={title}
      buttonStyle={[
        styles.buttonStyle,
        Gutters.mediumHPadding,
        Gutters.regularVPadding,
        Layout.justifyContentBetween,
      ]}
      titleStyle={[styles.titleStyle]}
      containerStyle={[
        styles.containerStyle,
        Gutters.mediumHPadding,
        Gutters.smallVPadding,
      ]}
      icon={<Icon name="search" size={30} color="black" />}
      iconRight
      onPress={onSearchPress}
    />
  )
}

export default Searchbox
