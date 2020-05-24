import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../style';

export const BackIcon = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <MaterialIcons name='keyboard-arrow-left' size={24} color={colors.white}/>
        </TouchableOpacity>
    );
};

export const GalleryIcon = ({color, size}) => {
    return (
        <MaterialIcons name='photo-library' size={size} color={color}/>
    );
};

export const FavouriteIcon = ({color, size}) => {
    return (
        <MaterialIcons name="favorite" size={size} color={color} />
    );
};
