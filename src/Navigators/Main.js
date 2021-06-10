import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@/Theme'
import { Icon } from 'react-native-elements'
import { CardContainer, FavoritesContainer } from '@/Containers'
import ExploreNavigator from './Explore'
import FavoritesNewNavigator from './FavoritesNew'
import AccountsNavigator from './Accounts'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  const { Colors, Fonts, Gutters, Layout } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Explore') {
            iconName = 'search'
            color = focused ? Colors.black : Colors.grey
          } else if (route.name === 'Card') {
            iconName = 'credit-card-alt'
            color = focused ? Colors.black : Colors.grey
          } else if (route.name === 'Favorites') {
            iconName = 'heart'
            color = focused ? Colors.black : Colors.grey
          } else if (route.name === 'Accounts') {
            iconName = 'user-circle-o'
            color = focused ? Colors.black : Colors.grey
          }
          return <Icon name={iconName} type="font-awesome" color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.black,
        inactiveTintColor: Colors.grey,
        labelStyle: [{ fontSize: 12 }],
        style: Platform.OS === 'ios' ? null : [{ height: 65 }],
        tabStyle: Platform.OS === 'ios' ? null : [Gutters.smallBPadding],
      }}
    >
      <Tab.Screen name="Explore" component={ExploreNavigator} />
      <Tab.Screen name="Card" component={CardContainer} />
      {/* <Tab.Screen name="Favorites" component={FavoritesContainer} /> */}
      <Tab.Screen name="Favorites" component={FavoritesNewNavigator} />
      <Tab.Screen name="Accounts" component={AccountsNavigator} />
    </Tab.Navigator>
  )
}

export default MainNavigator
