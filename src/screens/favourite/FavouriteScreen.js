import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import List from '../../components/List';

import { center } from '../../style';

const FavouriteScreen = ({ data }) => {
    return (
        <View style={styles.container}>
            {
                data.length !== 0 ? (
                    <List data={data}/>
                ) : <Text>No favourite photos</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...center,
        flex: 1
    }
});

const mapStateToProps = (state) => {
    return {
        data: state.favourite.data
    };
};

export default connect(mapStateToProps)(FavouriteScreen);
