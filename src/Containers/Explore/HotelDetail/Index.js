import React, { useEffect } from 'react'
import { useTheme } from '@/Theme'
import { View, Text, ScrollView, StatusBar, TouchableOpacity, Image, Linking } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HotelDetailSwiper, BasicModalAlert } from '@/Components'
import { HotelDetailSwiperData } from '@/Config'
import { Button } from 'react-native-elements'
import MapView from 'react-native-maps'
import { styles } from './styles'
const HotelDetailContainer = () => {
  const { Layout, Gutters, Fonts, Colors, Images } = useTheme()
  const navigation = useNavigation()
  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent()
    parent.setOptions({
      tabBarVisible: false,
    })
    return () =>
      parent.setOptions({
        tabBarVisible: true,
      })
  }, [])

  return (
    <SafeAreaView
      style={[Layout.fill, styles.container]}
      edges={['right', 'left']}
    >
      <StatusBar hidden />
      <ScrollView>
        <View>
          <HotelDetailSwiper listData={HotelDetailSwiperData} />
          <Icon
            name="close"
            type="ionicon"
            color={Colors.white}
            onPress={() => navigation.goBack()}
            size={33}
            containerStyle={styles.backIconStyle}
          />
          <Icon
            name="heart-outline"
            type="ionicon"
            color={Colors.white}
            onPress={() => navigation.goBack()}
            size={33}
            containerStyle={styles.heartIconStyle}
          />
        </View>
        <View
          style={[
            styles.nameContainer,
            Gutters.mediumHPadding,
            Gutters.mediumVPadding,
          ]}
        >
          <Text
            style={[Colors.Secondary, Fonts.textRegular, Fonts.textPrimary]}
          >
            New York
          </Text>
          <Text
            style={[
              Colors.Secondary,
              Fonts.textRegular,
              Fonts.textRegularSize,
              Fonts.textMedium,
              Gutters.smallTMargin,
            ]}
          >
            Hotel Name
          </Text>
        </View>
        <View style={styles.lineStyle}></View>
        <Text
          style={[
            Fonts.textRegularSize,
            Fonts.textRegular,
            Fonts.textLineHeight,
            Gutters.mediumVMargin,
            Gutters.mediumHMargin,
          ]}
        >
          Vivamus at augue eget arcu dictum varius duis at consectetur. Nulla
          aliquet porttitor lacus luctus accumsan. Nisl pretium fusce id velit.
          Malesuada pellentesque elit eget gravida.
        </Text>

        <View
          style={[
            styles.priceViewStyle,
            Gutters.mediumHMargin,
            Gutters.mediumVMargin,
            Gutters.mediumHPadding,
            Gutters.mediumVPadding,
          ]}
        >
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Gutters.smallBPadding,
              styles.priceHeader,
            ]}
          >
            <Text style={[Fonts.textBold, Fonts.textSmall]}>CATEGORY</Text>
            <Text style={[Fonts.textBold, Fonts.textSmall]}>EXEC RATE</Text>
            <Text style={[Fonts.textBold, Fonts.textSmall]}>STANDARD</Text>
          </View>
          {[
            {
              category: 'Deluxe',
              execrate: '$300',
              standard: '$450',
            },
            {
              category: 'Deluxe',
              execrate: '$300',
              standard: '$450',
            },
            {
              category: 'Deluxe',
              execrate: '$300',
              standard: '$450',
            },
          ].map((item, index) => {
            return (
              <View
                style={[
                  Layout.row,
                  Layout.justifyContentBetween,
                  Gutters.mediumVPadding,
                  styles.priceRow,
                ]}
                key={index}
              >
                <Text style={[Fonts.textRegular, Fonts.textSmall]}>Deluxe</Text>
                <Text style={[Fonts.textBold, Fonts.textSmall]}>$300</Text>
                <Text
                  style={[Fonts.textRegular, Fonts.textSmall, Fonts.textGrey]}
                >
                  $450
                </Text>
              </View>
            )
          })}
        </View>

        <View
          style={[
            styles.benefitsViewStyle,
            Gutters.mediumHMargin,
            Gutters.mediumVMargin,
            Gutters.mediumHPadding,
            Gutters.mediumVPadding,
          ]}
        >
          <Text style={[Fonts.textSmall, Fonts.textRegular, Fonts.textBold]}>
            BENEFITS
          </Text>
          <View style={[styles.titleLineStyle, Gutters.mediumTMargin]}></View>
          {[0, 1, 2].map((item, index) => (
            <View style={[Layout.row, Gutters.mediumTMargin]} key={index}>
              <View style={styles.bulletPoint}></View>
              <Text
                style={[
                  Gutters.mediumLMargin,
                  Fonts.textSmall,
                  Fonts.textRegular,
                ]}
              >
                Sit amet porttitor eget dolor morbi non arcu. Arcu cursus
                euismod quis viverra nibh cras pulvinar.
              </Text>
            </View>
          ))}
        </View>

        <View
          style={[
            styles.sectionViewStyle,
            Gutters.mediumHMargin,
            Gutters.mediumBMargin,
            Gutters.mediumHPadding,
            Gutters.mediumVPadding,
          ]}
        >
          <Text style={[Fonts.textSmall, Fonts.textRegular, Fonts.textBold]}>
            SECTION
          </Text>
          <View style={[styles.titleLineStyle, Gutters.mediumTMargin]}></View>
          {[0, 1, 2].map((item, index) => (
            <View style={[Layout.row, Gutters.mediumTMargin]} key={index}>
              <View style={styles.bulletPoint}></View>
              <Text
                style={[
                  Gutters.mediumLMargin,
                  Fonts.textSmall,
                  Fonts.textRegular,
                ]}
              >
                Sit amet porttitor eget dolor morbi non arcu. Arcu cursus
                euismod quis viverra nibh cras pulvinar.
              </Text>
            </View>
          ))}
        </View>
        <View
          style={[
            styles.sectionViewStyle,
            Gutters.mediumHMargin,
            Gutters.mediumBMargin,
            Gutters.mediumHPadding,
            Gutters.mediumVPadding,
          ]}
        >
          <Text style={[Fonts.textSmall, Fonts.textRegular, Fonts.textBold]}>
            LOCATION
          </Text>
          <View style={[styles.titleLineStyle, Gutters.mediumTMargin]}></View>
        </View>
        <View style={[styles.locationViewStyle]}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>

        <View
          style={[
            Gutters.mediumHMargin,
            Gutters.smallVMargin,
            Gutters.mediumHPadding,
            Gutters.mediumVPadding,
          ]}
        >
          <Text style={[Fonts.textRegularSize, Fonts.textRegular]}>
            123 Main Street, New York, NY 10001
          </Text>
          <Text
            style={[
              Fonts.textRegularSize,
              Fonts.textRegular,
              Gutters.smallTMargin,
            ]}
          >
            000-123-4567
          </Text>
          <Text
            style={[
              Gutters.smallTMargin,
              Fonts.textBold,
              Fonts.textRegularSize,
            ]}
          >
            www.hotelname.com
          </Text>
          <View style={Gutters.mediumTMargin}>
            <Button
              title="Visit Website"
              type="outline"
              titleStyle={[
                styles.titleStyle,
                Fonts.textRegular,
                Fonts.textRegularSize,
              ]}
              buttonStyle={[styles.buttonStyle, Gutters.mediumVPadding]}
              containerStyle={styles.containerStyle}
            />
          </View>
        </View>

        <View
          style={[
            styles.sectionViewStyle,
            Gutters.mediumHMargin,
            Gutters.mediumBMargin,
            Gutters.mediumHPadding,
            Gutters.mediumVPadding,
          ]}
        >
          <Text style={[Fonts.textSmall, Fonts.textRegular, Fonts.textBold]}>
            ADDITIONAL INFORMATION
          </Text>
          <View style={[styles.titleLineStyle, Gutters.mediumTMargin]}></View>
          <Text
            style={[
              Fonts.textRegularSize,
              Fonts.textRegular,
              Fonts.textLineHeight,
              Gutters.mediumVMargin,
            ]}
          >
            Vivamus at augue eget arcu dictum varius duis at consectetur. Nulla
            aliquet porttitor lacus luctus accumsan. Nisl pretium fusce id
            velit. Malesuada pellentesque elit eget gravida cum sociis natoque
            penatibus et. Mauris a diam maecenas sed enim ut sem viverra
            aliquet.
          </Text>
        </View>
      </ScrollView>
      <View
        style={[
          styles.bookBtnViewStyle,
          Gutters.smallVPadding,
          Gutters.largeHPadding,
          { zIndex: 10000 },
        ]}
      >
        <BasicModalAlert visible={visible}><View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
              
                source={Images.x}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        
        <View  style={{
            // borderBottomWidth:1,
            borderColor: '#ccc',
            // paddingVertical:20,
            marginBottom:20,
            // marginTop:10,
            marginHorizontal:-20,
            alignItems:'center'
          }}>
              <Image   style={{
                width: 65,
                height:45,
                resizeMode:'contain',
              }} 
              
              source={Images.redeem}
               />
              <Text 
              style={{
                fontSize:22,
                color:'#000',
                marginTop:20

              }}
              >Benefit Name</Text>
          </View>



          <View style={{
            borderBottomWidth: 2,
            borderColor: Colors.primary,
            paddingBottom: 10,
            
          }}>
            <Text style={[styles.bookTitleStyle, { color: '#000', fontWeight: 'normal' }]}>HOW TO REDEEM</Text>

          </View>

          <View>

            <View style={{
              flexDirection: 'row',
              paddingVertical: 15

            }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  color: Colors.primary
                }}
              >
                1
              </Text>

              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  color: '#000'
                }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>

            <View style={{
              flexDirection: 'row',
              paddingVertical: 15

            }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  color: Colors.primary
                }}
              >
                2
              </Text>

              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  color: '#000'
                }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>

            <View style={{
              flexDirection: 'row',
              paddingVertical: 15

            }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  color: Colors.primary
                }}
              >
                3
              </Text>

              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  color: '#000',
                  flex:1
                }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              
            </View>
            <Button
              title="CHECK OUT"
              type="outline"
              titleStyle={[
                styles.bookTitleStyle,
                Fonts.textRegularSize,
                Fonts.textBold,
              ]}
              buttonStyle={[styles.bookButtonStyle, Gutters.mediumVPadding]}
              containerStyle={styles.containerStyle}
              onPress={ ()=>{ Linking.openURL('https://hilton.com')}}
            />
          </View>
        </BasicModalAlert>
        <Button
          title="BOOK HOTEL"
          type="outline"
          titleStyle={[
            styles.bookTitleStyle,
            Fonts.textRegularSize,
            Fonts.textBold,
          ]}
          buttonStyle={[styles.bookButtonStyle, Gutters.mediumVPadding]}
          containerStyle={styles.containerStyle}
          onPress={() => setVisible(true)}
        />
      </View>
    </SafeAreaView>
  )
}

export default HotelDetailContainer
