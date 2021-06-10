import React, { useState } from 'react'
import { useTheme } from '@/Theme'
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import { CheckBox, Button, colors } from 'react-native-elements'
import RBSheet from 'react-native-raw-bottom-sheet'
import { BasicSectionList, SearchListItem } from '@/Components'
import { SearchFilterData } from '@/Config'
// import { styles } from './styles'
import { Colors } from '@/Theme/Variables'
import { Alert} from 'react-native'

const FilterItem = ({ title }) => {
  const { Layout, Gutters, Fonts, Colors } = useTheme()
  const [checked, setChecked] = useState(false)

  return (
    <CheckBox
      title={title}
      iconRight
      iconType="material"
      checkedIcon="done"
      uncheckedIcon={null}
      checkedColor={Colors.primary}
      checked={checked}
      textStyle={[
        Layout.fill,
        Fonts.textRegular,
        Fonts.textSmall,
        styles.textStyle,
      ]}
      containerStyle={styles.checkboxContainerStyle}
      onPress={() => setChecked(!checked)}
    />
  )
}



const BenefitRedeemSheet = React.forwardRef((props, ref) => {
  const { Layout, Gutters, Fonts ,Images} = useTheme()

function submitNewCustomer(){

Alert.alert(
  'REDEEM Code',
  'aXb0978',
  [
    
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
}

  return (
    <RBSheet
      ref={ref}
      height={650}
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <View style={[Layout.fill, Layout.fullWidth]}>
        {/* <BasicSectionLists
          listData={SearchFilterData}
          _renderItem={({ item }) => <FilterItem title={item} />}
        /> */}

        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 15
          }}>

          <View  style={{
            borderBottomWidth:1,
            borderColor: '#ccc',
            paddingVertical:20,
            marginBottom:20,
            marginTop:10,
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
            paddingBottom: 15,
          }}>
            <Text style={[styles.bookTitleStyle, { color: '#000', fontWeight: 'bold' }]}>HOW TO REDEEM</Text>

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

          </View>

        </View>
        <View
          style={[
            styles.bookBtnViewStyle,
            Gutters.smallVPadding,
            Gutters.mediumHPadding,
          ]}
        >
          <Button
            title="REVEAL CODE"
            type="outline"
            titleStyle={[
              styles.bookTitleStyle,
              Fonts.textRegularSize,
              Fonts.textBold,
            ]}
            buttonStyle={[styles.bookButtonStyle, Gutters.mediumVPadding]}
            containerStyle={[styles.containerStyle, Gutters.smallVMargin]}
            onPress={ () => submitNewCustomer()}

          />
        </View>
      </View>
    </RBSheet>
  )
})

export default BenefitRedeemSheet


const styles = StyleSheet.create({
  checkboxContainerStyle: {
    backgroundColor: Colors.transparent,
    borderWidth: 0,
    paddingLeft: 0,
    marginLeft: 0,
    paddingRight: 0,
    marginRight: 0,
    marginBottom: 5,
    paddingBottom: 0,
  },
  textStyle: {
    fontWeight: '400',
    fontSize: 18,
  },
  bookButtonStyle: {
    backgroundColor: Colors.primary,
    borderColor: Colors.white,
  },
  bookTitleStyle: {
    color: Colors.white,
  },
  bookBtnViewStyle: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
  },
})
