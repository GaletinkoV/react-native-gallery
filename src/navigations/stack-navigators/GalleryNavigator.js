import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GalleryScreen from '../../screens/gallery/HomeScreen';
import PhotoScreen from '../../screens/gallery/PhotoScreen';

import { routes } from '../routes';
import { stackStyle, getAnimation } from '../NavigatorStyles';

const Stack = createStackNavigator();

const GalleryNavigator = () => {
    return (
        <Stack.Navigator screenOptions={({ route }) => ({
            ...stackStyle
        })}>
            <Stack.Screen
                name={routes.GALLERY_SCREEN}
                options={{ title: 'Gallery', animationEnabled: getAnimation() }}
                component={GalleryScreen}
            />
            <Stack.Screen
                name={routes.PHOTO_SCREEN}
                options={{ title: '', headerTransparent: true, animationEnabled: getAnimation() }}
                component={PhotoScreen}
            />
        </Stack.Navigator>
    );
};

export default GalleryNavigator;
