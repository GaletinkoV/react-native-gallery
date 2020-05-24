import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ShowLoading from '../../components/ShowLoading';
import List from '../../components/List';

import { getPhotos } from '../../actions/galleryAction';

import { center } from '../../style';

const HomeScreen = ({ loading, data, getPhotos }) => {
    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <View style={styles.container}>
            {
                loading ? (
                    <ShowLoading/>
                ) : <List data={data}/>
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
    const { loading, data } = state.gallery;

    return {
        loading,
        data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPhotos: () => dispatch(getPhotos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
