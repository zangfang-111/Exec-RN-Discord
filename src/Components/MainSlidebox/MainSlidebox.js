import React from 'react'
import { useTheme } from '@/Theme'
import { MainSlideboxItem } from '@/Components'
import Swiper from 'react-native-swiper'

import { styles } from './styles'

const MainSlidebox = ({ listData, height = 400 }) => {
  const { Colors } = useTheme()

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      height={height}
      dotStyle={styles.dotStyle}
      dotColor={Colors.grey}
      activeDotStyle={styles.dotStyle}
      activeDotColor={Colors.white}
    >
      {listData.map((item, index) => {
        return <MainSlideboxItem data={item} key={index} />
      })}
    </Swiper>
  )
}

export default MainSlidebox
