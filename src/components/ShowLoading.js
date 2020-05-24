import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from '../style';

const ShowLoading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={colors.blue} size='large'/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ShowLoading;
