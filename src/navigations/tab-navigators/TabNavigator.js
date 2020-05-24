import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import GalleryNavigator from '../stack-navigators/GalleryNavigator';
import FavouriteNavigator from '../stack-navigators/FavouriteNavigator';

import { GalleryIcon, FavouriteIcon } from '../../icons';
import { getTabBarVisible } from '../NavigatorStyles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                lazy={false}
                initialRouteName='Gallery'
            >
                <Tab.Screen
                    name='Gallery'
                    options={({route}) => ({
                        tabBarVisible: getTabBarVisible(route),
                        tabBarIcon: ({ focused, color, size }) => <GalleryIcon size={24} color={color}/>
                    })}
                    component={GalleryNavigator}
                />
                <Tab.Screen
                    name='Favourites'
                    options={({route}) => ({
                        tabBarVisible: getTabBarVisible(route),
                        tabBarIcon: ({ focused, color, size }) => <FavouriteIcon size={24} color={color}/>
                    })}
                    component={FavouriteNavigator}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;
