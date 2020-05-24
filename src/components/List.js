import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const List = ({ data }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => <ListItem item={item} index={index}/>}
                keyExtractor={({ id }) => id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
});

export default List;
