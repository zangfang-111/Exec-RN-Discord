import React, { useEffect } from 'react'
import { useTheme } from '@/Theme'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const HistoryItem = ({ item }) => {
  const { Fonts, Gutters, Layout, Colors } = useTheme()
  const navigation = useNavigation()
  useEffect(() => {
    console.log(item);
  }, [])
  return (
    <TouchableOpacity
    //   style={[
    //     styles.container,
    //     Gutters.mediumVMargin,
    //     Layout.col,
    //     Layout.justifyContentCenter,
    //     Layout.alignItemsCenter,
        
    //   ]}
    style={styles.container}
    >
        
      <Image source={{ uri: item.image }} style={[Gutters.regularTMargin], styles.imageStyle} />
      <Text style={{}}>
        {item.title}
      </Text>
        <Button
          title="DETAILS"
          type="outline"
          titleStyle={[
            styles.bookTitleStyle,
            Fonts.textRegularSize,
            // Fonts.textRegularSize,
          ]}
          buttonStyle={styles.bookButtonStyle}
          containerStyle={styles.containerStyle}
          onPress={() => navigation.navigate('FavoriteDetail')}
        />
    </TouchableOpacity>
  )
}

export default HistoryItem
