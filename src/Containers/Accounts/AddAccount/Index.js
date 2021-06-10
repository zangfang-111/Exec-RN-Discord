import React, { useEffect, useState } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  Text,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { compose } from 'recompose'
import { Formik } from 'formik'
import { Input, Button, Icon, Overlay } from 'react-native-elements'
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from 'react-native-formik'
import * as Yup from 'yup'
import { useTheme } from '@/Theme'
import { styles } from './styles'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('please! Email?')
    .email("Welp, that's not an email"),
  name: Yup.string().required('please! Name?'),
})
const InputField = compose(handleTextInput, withNextInputAutoFocusInput)(Input)
const Form = withNextInputAutoFocusForm(View)

const AddAccountContainer = ({ loading }) => {
  const { Layout, Gutters, Images, Fonts, Colors, Common } = useTheme()
  const navigation = useNavigation()

  const onSubmit = () => {}

  useEffect(() => {
    navigation.setOptions({
      title: Platform.OS === 'ios' ? '' : 'Add Sub-Account',
      headerTintColor: Colors.black,
      headerBackImage: () => (
        <Icon
          name="close"
          type="ionicon"
          color={Colors.Black}
          onPress={() => navigation.navigate('Accounts')}
          size={30}
        />
      ),
      headerBackTitle: 'Add Sub-Account',
      headerBackTitleStyle: [Fonts.textRegular, Fonts.textRegularSize],
      headerLeftContainerStyle: { paddingLeft: 10 },
    })
  }, [])

  const [visible, setVisible] = useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  const onSendInvitation = () => {
    setVisible(!visible)
    setTimeout(() => {
      navigation.navigate('subAccounts')
    }, 500)
  }

  return (
    <SafeAreaView
      style={[Layout.fill, styles.container]}
      edges={['right', 'left']}
    >
      <StatusBar hidden />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={[styles.overlayViewStyle, Layout.center]}>
          <Icon
            name="checkmark-circle-outline"
            type="ionicon"
            color={Colors.primary}
            size={100}
          />
          <Text
            style={[Fonts.textMedium, Fonts.textRegular, Gutters.mediumTMargin]}
          >
            Invite Sent!
          </Text>
        </View>
      </Overlay>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={Layout.fill}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[Layout.fill]}>
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
                        label="Name"
                        name="name"
                        autoCapitalize="none"
                        value={values.name}
                        onChangeText={(value) => setFieldValue('name', value)}
                        onBlur={() => setFieldTouched('name')}
                        editable={!loading}
                        errorMessage={
                          touched.name && errors.name ? errors.name : undefined
                        }
                        containerStyle={[styles.inputContainer]}
                        labelStyle={[
                          styles.labelStyle,
                          Gutters.smallBMargin,
                          Fonts.textRegularSize,
                          Fonts.textRegular,
                        ]}
                        inputStyle={[
                          styles.inputStyle,
                          Gutters.regularLPadding,
                        ]}
                        inputContainerStyle={styles.inputContainerStyle}
                      />
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

                      <Button
                        onPress={() => onSendInvitation()}
                        title="INVITE"
                        containerStyle={[Layout.fullWidth, styles.submitButton]}
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
    </SafeAreaView>
  )
}

export default AddAccountContainer
