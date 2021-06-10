import React from 'react'
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native'
import { compose } from 'recompose'
import { Formik } from 'formik'
import { Input, Button } from 'react-native-elements'
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from 'react-native-formik'
import * as Yup from 'yup'
import { useTheme } from '@/Theme'
import { Logo } from '@/Components'
import { styles } from './styles'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('please! Email?')
    .email("Welp, that's not an email"),
  password: Yup.string()
    .required('please! Password?')
    .min(6, "That can't be very secure"),
})
const InputField = compose(handleTextInput, withNextInputAutoFocusInput)(Input)
const Form = withNextInputAutoFocusForm(View)

const LoginFormContainer = ({ onSubmit, loading, goForgotPwd, navigation }) => {
  const { Layout, Gutters, Fonts, Images, Common, Colors } = useTheme()
  return (
    <View style={[Layout.fill, { backgroundColor: Colors.black }]}>
      <ImageBackground
        source={Images.loginformBackground}
        style={[Layout.fullSize]}
        resizeMode={'stretch'}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={Layout.fill}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={[Layout.fill, Layout.justifyContentCenter]}>
              <View style={[styles.logoContainer]}>
                <Logo />
              </View>
              <View style={[Gutters.largeHMargin, styles.formContainer]}>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  onSubmit={onSubmit}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    handleSubmit,
                    setFieldValue,
                    touched,
                    errors,
                    setFieldTouched,
                    isSubmitting,
                  }) => {
                    return (
                      <Form>
                        <InputField
                          label="Email Address"
                          name="email"
                          keyboardType="email-address"
                          autoCapitalize="none"
                          value={values.email}
                          onChangeText={(text) => setFieldValue('email', text)}
                          onBlur={() => setFieldTouched('email')}
                          editable={!loading}
                          errorMessage={
                            touched.email && errors.email
                              ? errors.email
                              : undefined
                          }
                          containerStyle={[styles.inputContainer]}
                          labelStyle={[styles.labelStyle, Gutters.smallBMargin]}
                          inputStyle={[
                            styles.inputStyle,
                            Gutters.regularLPadding,
                          ]}
                          inputContainerStyle={styles.inputContainerStyle}
                        />
                        <InputField
                          label="Email Password"
                          name="password"
                          secureTextEntry
                          autoCapitalize="none"
                          value={values.password}
                          onChangeText={(value) =>
                            setFieldValue('password', value)
                          }
                          onBlur={() => setFieldTouched('password')}
                          editable={!loading}
                          errorMessage={
                            touched.password && errors.password
                              ? errors.password
                              : undefined
                          }
                          containerStyle={[styles.inputContainer]}
                          labelStyle={[styles.labelStyle, Gutters.smallBMargin]}
                          inputStyle={[
                            styles.inputStyle,
                            Gutters.regularLPadding,
                          ]}
                          inputContainerStyle={styles.inputContainerStyle}
                        />

                        <Button
                          onPress={() => navigation.navigate('Main')}
                          title="LOGIN"
                          containerStyle={[
                            Layout.fullWidth,
                            styles.submitButton,
                          ]}
                          buttonStyle={[
                            Common.button.base,
                            Common.backgroundPrimary,
                          ]}
                          loading={loading}
                        />
                      </Form>
                    )
                  }}
                </Formik>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  )
}

export default LoginFormContainer
