import React from 'react'
import { useTheme } from '@/Theme'
import { createStackNavigator } from '@react-navigation/stack'

import {
    CardContainer,
    FavoritesNewContainer,
    FavoriteDetailContainer,
    HotelDetailContainer,
    SearchContainer,
} from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const FavoritesNewNavigator = () => {
    const { Colors, Fonts, Gutters } = useTheme()
    return (
        <Stack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: 'white' } }}
        >
            <Stack.Screen
                name="FavoritesMain"
                component={FavoritesNewContainer}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="FavoriteDetail"
                component={FavoriteDetailContainer}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="SearchContainer"
                component={SearchContainer}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    )
}

export default FavoritesNewNavigator
