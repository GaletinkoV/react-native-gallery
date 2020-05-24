import { colors } from '../style';
import { Platform } from 'react-native';

export const stackStyle = {
    headerStyle: {
        backgroundColor: colors.blue,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    gestureEnabled: false,
    headerTintColor: colors.white,
};

export const getAnimation = () => {
    return Platform.OS === 'ios';
};

export const getTabBarVisible = (route) => {
    let showTab = true;

    if (route.state && route.state.index === 1) {
        showTab = false;
    }
    return showTab;
};
