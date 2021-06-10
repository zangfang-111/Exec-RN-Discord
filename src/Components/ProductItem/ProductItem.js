import React from 'react'
import { useTheme } from '@/Theme'
import { Text, TouchableHighlight, View } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

const ProductItem = ({ item, itemWidth, itemHeight, parallaxProps }) => {
  const { Gutters } = useTheme()
  const navigation = useNavigation()
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      style={Gutters.mediumVMargin}
      onPress={() => navigation.navigate('FavoriteDetail')}
    >
      <View style={{ width: itemWidth, height: itemHeight }}>
        <ParallaxImage
          source={{ uri: item.image }}
          containerStyle={styles.imageContainer}
          style={{ resizeMode: 'cover' }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View style={styles.textContainer}>
          <Text style={styles.categoryStyle}>{item.category}</Text>
          <Text
            style={[styles.titleStyle, Gutters.smallTMargin]}
            numberOfLines={2}
          >
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ProductItem
