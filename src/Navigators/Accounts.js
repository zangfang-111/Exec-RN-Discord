import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  AccountsContainer,
  SubAccountsContainer,
  AddAccountContainer,
  HistoryContainer,
  ProfileContainer,
  SecurityPrivacyContainer,
  FavoriteDetailContainer
} from '@/Containers'
const Stack = createStackNavigator()

// @refresh reset
const AccountsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: 'white' } }}
    >
      <Stack.Screen
        name="Accounts"
        component={AccountsContainer}
        options={{ header: () => null }}
      />
      <Stack.Screen name="subAccounts" component={SubAccountsContainer} />
      <Stack.Screen name="addAccount" component={AddAccountContainer} />
      <Stack.Screen name="history" component={HistoryContainer} />
      <Stack.Screen name="profile" component={ProfileContainer} />
      <Stack.Screen name="securityPrivacy" component={SecurityPrivacyContainer} />
      <Stack.Screen name="FavoriteDetail" component={FavoriteDetailContainer} options={{ header: () => null }}/>
    </Stack.Navigator>
  )
}

export default AccountsNavigator
