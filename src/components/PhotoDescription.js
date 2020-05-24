import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PhotoDescription = ({item, index}) => {
    let {alt_description} = item;
    const { first_name, last_name } = item.user;

    if (alt_description === null) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {`Photo #${index + 1}`}
                </Text>
                <Text>
                    {`Author: ${first_name} ${last_name}`}
                </Text>
            </View>
        );
    }

    if (alt_description.length > 20) {
        alt_description = `${alt_description.charAt(0).toUpperCase()}${alt_description.substring(1, 20)}...`
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {alt_description}
            </Text>
            <Text>
                {`Author: ${first_name} ${last_name}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        paddingVertical: 8
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default React.memo(PhotoDescription);
