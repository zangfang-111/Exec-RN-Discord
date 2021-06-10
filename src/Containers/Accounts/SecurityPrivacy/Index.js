import React, { useEffect, useState } from 'react'
import { useTheme } from '@/Theme'
import { View, Image, Text, StatusBar, ScrollView } from 'react-native'
import { Icon, Button, Divider, CheckBox } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { BasicFlatList, SubAccountItem } from '@/Components'
import { subAccountsData } from '@/Config'

import { styles } from './styles'

const SecurityPrivacyContainer = () => {
  const { Layout, Gutters, Images, Fonts, Colors, Common } = useTheme()
  const navigation = useNavigation()
  const [isNotifySelected, setIsNotifySelectedSelection] = useState(false);
  const [isSubscribeNewsletter, setIsSubscribeNewsletter] = useState(false);
  const [isRecievePromotionCodes, setIsRecievePromotionCodes] = useState(false);
  const [isAcceptGDPR, setIsAcceptGDPR] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: Platform.OS === 'ios' ? '' : 'Security & Privacy',
      headerTintColor: Colors.black,
      headerBackImage: () => (
        <Icon
          name="angle-left"
          type="font-awesome"
          color={Colors.Black}
          onPress={() => navigation.navigate('Accounts')}
          size={33}
        />
      ),
      headerBackTitle: 'Security & Privacy',
      headerBackTitleStyle: [
        Fonts.textRegular,
        Fonts.textRegularSize,
        Gutters.smallLMargin,
        { marginTop: 3 },
      ],
      headerLeftContainerStyle: { paddingLeft: 10 },
    })
  }, [])

  return (
    <SafeAreaView
      style={[Layout.fill, styles.container]}
      edges={['right', 'left']}
    >
        <View style={styles.container}>
        <View style={styles.checkboxContainer}>
        <CheckBox
            center
            title='Notifiy me about benifits'
            titleProps={{allowFontScaling:false}}
            checked={isNotifySelected}
            checkedIcon={<Image style={{width: 32, height: 32}} source={Images.check} />}
            uncheckedIcon={<Image style={{width: 32, height: 32}} source={Images.uncheck} />}
            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
            onPress={() => setIsNotifySelectedSelection(!isNotifySelected)}
        />
        <CheckBox
            center
            title='Subscribe to newsletter'
            titleProps={{allowFontScaling:false}}
            checked={isSubscribeNewsletter}
            checkedIcon={<Image style={{width: 32, height: 32}} source={Images.check} />}
            uncheckedIcon={<Image style={{width: 32, height: 32}} source={Images.uncheck} />}
            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
            onPress={() => setIsSubscribeNewsletter(!isSubscribeNewsletter)}
        />
        <CheckBox
            center
            title='Recieve promotion codes'
            titleProps={{allowFontScaling:false}}
            checked={isRecievePromotionCodes}
            checkedIcon={<Image style={{width: 32, height: 32}} source={Images.check} />}
            uncheckedIcon={<Image style={{width: 32, height: 32}} source={Images.uncheck} />}
            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
            onPress={() => setIsRecievePromotionCodes(!isRecievePromotionCodes)}
        />
        <CheckBox
            center
            title='I accept GDPR'
            titleProps={{allowFontScaling:false}}
            checked={isAcceptGDPR}
            checkedIcon={<Image style={{width: 32, height: 32}} source={Images.check} />}
            uncheckedIcon={<Image style={{width: 32, height: 32}} source={Images.uncheck} />}
            containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
            onPress={() => setIsAcceptGDPR(!isAcceptGDPR)}
        />
        <Button
          title="SAVE"
          type="outline"
          titleStyle={[
            styles.bookTitleStyle,
            Fonts.textRegularSize,
          ]}
          buttonStyle={styles.bookButtonStyle}
          containerStyle={styles.containerStyle}
        />
        
      </View>
      </View>
      
    </SafeAreaView>
  )
}

export default SecurityPrivacyContainer
