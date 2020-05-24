import { Dimensions, Platform, StatusBar } from 'react-native';

const window = Dimensions.get('screen');

export const WINDOW_WIDTH = Platform.OS === 'ios' ? window.width : window.width;

export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const colors = {
    blue: '#1771F1',
    white: '#ffffff',
    black: '#000000',
    grey: '#b1b1b1',
    silver: '#e0e0e0',
    red: '#fc3158'
};

export const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
};

export const center = {
    justifyContent: 'center',
    alignItems: 'center'
};
