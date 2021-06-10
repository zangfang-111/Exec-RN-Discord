import React from 'react'
import { View, Text } from 'react-native'
import Swiper from 'react-native-swiper'
import { useTheme } from '@/Theme'
import { SwiperItem } from '@/Components'

import { styles } from './styles'
const BasicSwiper = ({ listData, height = 250, onClickItem }) => {
  const { Colors } = useTheme()
  return (
    <Swiper
      style={styles.container}
      showsButtons={false}
      height={height}
      dotStyle={styles.dotStyle}
      dotColor={Colors.grey}
      activeDotStyle={styles.dotStyle}
      activeDotColor={Colors.white}
      paginationStyle={styles.paginationStyle}
    >
      {listData.values.map((item, index) => {
        return (
          <SwiperItem
            data={item}
            category={listData.category}
            key={index}
            onClickItem={onClickItem}
          />
        )
      })}
    </Swiper>
  )
}

export default BasicSwiper
