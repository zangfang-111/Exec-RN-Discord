import React, { useEffect, useRef } from 'react'
import { useTheme } from '@/Theme'
import { View, Text, ScrollView, StatusBar, TouchableOpacity, Image, Linking } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';

import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HotelDetailSwiper, 
  BasicModalAlert,
  BenefitRedeemSheet 
} from '@/Components'
import { HotelDetailSwiperData } from '@/Config'
import { Button } from 'react-native-elements'
import MapView from 'react-native-maps'
import { styles } from './styles'
import { TextInput } from 'react-native-gesture-handler'

const FavoriteDetailContainer = () => {
  const copyToClipboard = () => {
    Clipboard.setString(shareCode);
  }
  const [visible, setVisible] = React.useState(false);
  const [shareCode, setShareCode] = React.useState("share code here")
  const [hideRevealCode, setHideRevealCode] = React.useState(false);

  const { Layout, Gutters, Fonts, Colors, Images } = useTheme()
  const navigation = useNavigation()
  const RBSheetRef = useRef();

  const Reveal = () => {
    if(!hideRevealCode && visible) {
      return <View  style={{position:"absolute", top:"75%",width:"100%"}}>
      <Button
        title="REVEAL CODE"
        type="outline"
        titleStyle={[
          styles.bookTitleStyle,
          Fonts.textRegularSize,
          Fonts.textBold,
        ]}
        buttonStyle={[styles.bookButtonStyle, Gutters.mediumVPadding]}
        containerStyle={styles.containerStyle}
        onPress={()=> setHideRevealCode(true)}
      />
      </View>;
    }else {
      return <View/>
    }
    
  };

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
            CATEGORY
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
            Benefit Name
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
        {/* <View
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
        </View> */}
        {/* <View style={[styles.locationViewStyle]}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View> */}

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
            www.website.com
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
        <Button
          title="REDEEM"
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
      <BasicModalAlert visible={visible}>
        <View style={{alignItems: 'center' }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => {setVisible(false),setHideRevealCode(false)}}>
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
            <View style={styles.codeViewStyle}>
              <View style={{justifyContent: 'center',alignItems: 'center', flex:1}}>
                <Text>{shareCode}</Text>
              </View>
              <View style={{flexDirection: "row", overflow: 'hidden',borderLeftWidth: 1, borderLeftColor: Colors.grey}}>
                <TouchableOpacity onPress={ () => copyToClipboard()}><Image source={Images.copy} style={styles.redeamButtons}></Image></TouchableOpacity>
                <View style={{backgroundColor: Colors.grey, width: 1.5}}></View>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://hilton.com')}}><Image source={Images.link} style={styles.redeamButtons}></Image></TouchableOpacity>
              </View>              
            </View>
            {<Reveal/>}
          </View>
          
        </BasicModalAlert>
      {/* <BenefitRedeemSheet ref={RBSheetRef} /> */}
    </SafeAreaView>

  )
}
             

export default FavoriteDetailContainer


