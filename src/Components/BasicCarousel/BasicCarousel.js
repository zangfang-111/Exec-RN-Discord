import React, { useRef } from 'react'
import Carousel from 'react-native-snap-carousel'
import { useTheme } from '@/Theme'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

const BasicCarousel = ({
  title,
  listData,
  _renderItem,
  sliderWidth,
  itemWidth,
  itemHeight,
  slideAlignment = 'start',
  hasParallaxImages = true,
}) => {
  const { Fonts, Gutters } = useTheme()
  const carouselRef = useRef()

  return (
    <View style={[Gutters.mediumHMargin, Gutters.regularTMargin]}>
      <Text style={[Fonts.textMedium, Fonts.textBlack, Fonts.textRegular]}>
        {title}
      </Text>
      <Carousel
        layout={'default'}
        ref={carouselRef}
        data={listData}
        sliderWidth={sliderWidth}
        sliderHeight={sliderWidth}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        renderItem={_renderItem}
        hasParallaxImages={hasParallaxImages}
        activeSlideAlignment={slideAlignment}
      />
    </View>
  )
}

export default BasicCarousel
