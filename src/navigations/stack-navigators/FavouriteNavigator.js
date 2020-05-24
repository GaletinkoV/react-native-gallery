import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FavouriteScreen from '../../screens/favourite/FavouriteScreen';
import PhotoScreen from '../../screens/gallery/PhotoScreen';

import { routes } from '../routes';
import { stackStyle, getAnimation } from '../NavigatorStyles';

const Stack = createStackNavigator();

const FavouriteNavigator = () => {
    return (
        <Stack.Navigator screenOptions={({ route }) => ({
            ...stackStyle
        })}>
            <Stack.Screen
                name={routes.FAVOURITE_SCREEN}
                options={{ title: 'Favourites', animationEnabled: getAnimation() }}
                component={FavouriteScreen}
            />
            <Stack.Screen
                name={routes.PHOTO_SCREEN}
                options={{ title: '', headerTransparent: true, animationEnabled: getAnimation() }}
                component={PhotoScreen}
            />
        </Stack.Navigator>
    );
};

export default FavouriteNavigator;
