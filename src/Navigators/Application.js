import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginContainer, LoginFormContainer } from '@/Containers'

import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { useTheme } from '@/Theme'
import { AppearanceProvider } from 'react-native-appearance'
import MainNavigator from './Main'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { NavigationTheme } = useTheme()

  return (
    <AppearanceProvider>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Login" component={LoginContainer} />
          <Stack.Screen name="LoginForm" component={LoginFormContainer} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  )
}

export default ApplicationNavigator
