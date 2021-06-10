import React from 'react'
import { Text, ImageBackground, View, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import { useTheme } from '@/Theme'
import { Logo } from '@/Components'
import { styles } from './styles'

// @refresh reset
const LoginContainer = ({ navigation }) => {
  const { Layout, Fonts, Images, Common, Gutters } = useTheme()
  return (
    <View style={Layout.fill}>
      <ImageBackground
        source={Images.loginBackground}
        style={[Layout.fullSize]}
        resizeMode={'stretch'}
      >
        <View style={[Layout.fill, Layout.colCenter]}>
          <Logo />
        </View>
        <SafeAreaView style={[Layout.colVCenter]}>
          <Button
            title="LOGIN"
            containerStyle={[
              Layout.fullWidth,
              styles.loginButton,
              Gutters.mediumBMargin,
            ]}
            buttonStyle={[Common.button.base, Common.backgroundPrimary]}
            onPress={() => navigation.navigate('LoginForm')}
          >
            {/* <Text style={[Fonts.textSmall, Fonts.textWhite]}>LOGIN</Text> */}
          </Button>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

export default LoginContainer
