import React from 'react'
import { useTheme } from '@/Theme'
import { createStackNavigator } from '@react-navigation/stack'

import {
  ExploreContainer,
  HotelsContainer,
  HotelListContainer,
  HotelDetailContainer,
  SearchContainer,
  FavoriteDetailContainer,
  CategoryListContainer
} from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const ExploreNavigator = () => {
  const { Colors, Fonts, Gutters } = useTheme()
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: 'white' } }}
    >
      <Stack.Screen
        name="ExploreMain"
        component={ExploreContainer}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="ExploreHotels"
        component={HotelsContainer}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="CategoryListContainer"
        component={CategoryListContainer}
        // options={{ header: () => null }}
      />
      <Stack.Screen name="ExploreHotelList" component={HotelListContainer} />
      <Stack.Screen
        name="ExploreHotelDetail"
        component={HotelDetailContainer}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="SearchContainer"
        component={SearchContainer}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="FavoriteDetail"
        component={FavoriteDetailContainer}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  )
}

export default ExploreNavigator
