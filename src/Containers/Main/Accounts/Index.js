import React from 'react'
import { useTheme } from '@/Theme'
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ListItem, Avatar } from 'react-native-elements'
import { accountsListMenu, Recommendation } from '@/Config'
import {
  ProductItem,
  BasicCarousel,

} from '@/Components'

const SLIDER_WIDTH = Dimensions.get('window').width

import { styles } from './styles'

const AccountsContainer = () => {
  const { Layout, Gutters, Images, Fonts } = useTheme()
  const navigation = useNavigation()
  return (
    <SafeAreaView
      style={[Layout.fill, styles.container, Gutters.largeBPadding]}
      edges={['right', 'left']}
    >
      <StatusBar hidden />
      <ScrollView>
        <ImageBackground
          source={Images.accounttopbg}
          style={styles.topBackgroundStyle}
          resizeMode={'stretch'}
        />

        <View
          style={[
            Layout.fill,
            Layout.col,
            Layout.center,
            styles.avatarContainer,
          ]}
        >
          <Avatar
            rounded
            size={80}
            title="JS"
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <Text
            style={[Fonts.textLarge, Fonts.textRegular, Gutters.smallTMargin]}
          >
            John Smith
          </Text>
        </View>

        <View
          style={[
            Layout.fill,
            styles.membershipContainer,
            Gutters.mediumHPadding,
            Gutters.mediumVPadding,
          ]}
        >
          <Text style={[Fonts.textSmall, Fonts.textBold]}>MEMBERSHIP #</Text>
          <Text
            style={[
              Fonts.textMedium,
              Fonts.textRegular,
              Gutters.smallTMargin,
              Fonts.textLetterSpacing,
            ]}
          >
            1234567890
          </Text>
          <View style={[styles.hairlineStyle, Gutters.mediumVMargin]} />
          <Text style={[Fonts.textSmall, Fonts.textRegular]}>
            Member of <Text style={Fonts.textBold}>Forbes Council</Text>
          </Text>
          <Text
            style={[Fonts.textSmall, Fonts.textRegular, Gutters.smallTMargin]}
          >
            since January 2021
          </Text>
        </View>

        <View style={[Gutters.mediumHMargin, Gutters.largeVMargin]}>
          <Text style={[Fonts.textSmall, Fonts.textBold]}>REDEMPTIONS</Text>
          <View style={[styles.hairlineStyle, Gutters.mediumVMargin]} />
          <View style={[Layout.row, Layout.center]}>
            {[
              { title: 'THIS YEAR', value: 7 },
              { title: 'ALL TIME', value: 32 },
            ].map((item, index) => {
              return (
                <View
                  style={[
                    Layout.fill,
                    styles.redemptionValue,
                    Gutters.smallRMargin,
                    Gutters.largeHPadding,
                    Gutters.mediumVPadding,
                  ]}
                  key={index}
                >
                  <Text style={[Fonts.textRegularSize, Fonts.textRegular]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      Fonts.textMedium,
                      Fonts.textRegular,
                      Gutters.smallTMargin,
                    ]}
                  >
                    {item.value}
                  </Text>
                </View>
              )
            })}
          </View>
        </View>
        <BasicCarousel
          title="My Favorites"
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
          listData={Recommendation}
        />
        <View>
          {accountsListMenu.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(item.screen || '')}
              >
                <ListItem key={index} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title
                      style={[Fonts.textRegularSize, Fonts.textRegular]}
                    >
                      {item.title}
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountsContainer
