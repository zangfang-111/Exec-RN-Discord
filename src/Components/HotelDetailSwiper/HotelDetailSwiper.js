import React from 'react'
import { useTheme } from '@/Theme'
import { Image } from 'react-native'
import Swiper from 'react-native-swiper'

import { styles } from './styles'

const HotelDetailSwiper = ({ listData, height = 400 }) => {
  const { Colors, Layout } = useTheme()

  return (
    <Swiper
      style={styles.containerStyle}
      showsButtons={false}
      height={height}
      dotStyle={styles.dotStyle}
      dotColor={Colors.grey}
      activeDotStyle={styles.dotStyle}
      activeDotColor={Colors.white}
      paginationStyle={styles.paginationStyle}
    >
      {listData.map((item, index) => {
        return (
          <Image
            source={{ uri: item.background }}
            resizeMode="cover"
            style={[Layout.fullWidth, { height: height }]}
            key={index}
          />
        )
      })}
    </Swiper>
  )
}

export default HotelDetailSwiper
