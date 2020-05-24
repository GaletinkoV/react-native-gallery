import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ShowLoading from './ShowLoading';
import PhotoDescription from './PhotoDescription';

import { routes } from '../navigations/routes';
import { colors, shadow } from '../style';

const ListItem = ({ item, index }) => {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.5}
            onPress={() => navigation.navigate(routes.PHOTO_SCREEN, { item })}
        >
            <PhotoDescription item={item} index={index}/>
            <Image
                style={{ width: 70, height: 70 }}
                source={{ uri: item.urls.full }}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
            />
            {
                loading ? (
                    <View style={styles.loadingPhoto}>
                        <ShowLoading/>
                    </View>
                ) : null
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        ...shadow,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        alignItems: 'center',
        width: '100%',
        height: 80,
        marginVertical: 8,
        backgroundColor: colors.white,
    },
    loadingPhoto: {
        position: 'absolute',
        width: 70,
        height: 70,
        right: 12
    }
});

export default ListItem;
