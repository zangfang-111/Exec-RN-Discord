import React from 'react'
import { useTheme } from '@/Theme'
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import {
  Searchbox,
  BasicFlatList,
  DestinationItem,
  BrandItem,
  BasicCarousel,
  ProductItem,
} from '@/Components'
import { Destinations, Hotelbrands, FeaturedHotels } from '@/Config'
import { styles } from './styles'

const SLIDER_WIDTH = Dimensions.get('window').width

const HotelsContainer = () => {
  const { Layout, Gutters, Images, Fonts, Colors } = useTheme()
  const navigation = useNavigation()

  const onSearchPress = () => {
    navigation.navigate('SearchContainer')
  }

  return (
    <SafeAreaView
      style={[Layout.fill, styles.container]}
      edges={['right', 'left']}
    >
      <StatusBar hidden />
      <ScrollView>
        <ImageBackground
          source={Images.hotelsTopBg}
          style={styles.topBackgroundStyle}
          resizeMode={'stretch'}
        />
        <View style={[Layout.fill, Layout.col, Layout.center]}>
          <Icon
            name="angle-left"
            type="font-awesome"
            color={Colors.white}
            onPress={() => navigation.navigate('ExploreMain')}
            size={33}
            containerStyle={styles.backIconStyle}
          />
          <Text
            style={[
              styles.topTitle,
              Fonts.textLarge,
              Fonts.textWhite,
              Fonts.textRegular,
            ]}
          >
            Hotels
          </Text>
          <Text
            style={[
              Gutters.smallTMargin,
              Gutters.largeHMargin,
              Fonts.textRegularSize,
              Fonts.textWhite,
              Fonts.textRegular,
              Fonts.textCenter,
              Fonts.textLineHeight,
            ]}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </View>
        <View style={styles.searchBoxStyle}>
          <Searchbox
            title={'Where do you want to go?'}
            onSearchPress={onSearchPress}
          />
        </View>
        <BasicFlatList
          horizontal
          title="Destinations"
          _renderItem={({ item, index }) => <DestinationItem item={item} />}
          listData={Destinations}
        />
        <BasicFlatList
          horizontal
          title="Hotel Brands"
          _renderItem={({ item, index }) => <BrandItem item={item} />}
          listData={Hotelbrands}
        />
        <BasicCarousel
          title="Featured Hotels"
          _renderItem={({ item, index }, parallaxProps) => (
            <ProductItem
              item={item}
              index={index}
              itemWidth={Math.round(SLIDER_WIDTH * 0.6)}
              itemHeight={Math.round((Math.round(SLIDER_WIDTH * 0.7) * 3) / 4)}
              parallaxProps={parallaxProps}
            />
          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={Math.round(SLIDER_WIDTH * 0.6)}
          itemHeight={Math.round((Math.round(SLIDER_WIDTH * 0.7) * 3) / 4)}
          listData={FeaturedHotels}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HotelsContainer
