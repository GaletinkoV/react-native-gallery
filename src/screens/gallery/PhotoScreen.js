import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Platform, StatusBar } from 'react-native';

import ShowLoading from '../../components/ShowLoading';

import { colors, center, WINDOW_HEIGHT } from '../../style';
import { connect } from 'react-redux';
import { addPhoto, removePhoto } from '../../actions/favouriteAction';
import { FavouriteIcon } from '../../icons';

const PhotoScreen = ({ route, data, addPhoto, removePhoto }) => {
    const [loading, setLoading] = useState(false);
    const { item } = route.params;
    const isFavourite = !!(data.find(_item => _item.id === item.id));

    return (
        <View style={styles.container}>
            {
                Platform.OS === 'ios' ? (
                    <StatusBar barStyle='dark-content'/>
                ) : null
            }
            <Image
                style={{ width: '100%', height: WINDOW_HEIGHT }}
                source={{ uri: item.urls.full }}
                onLoadStart={() => {
                    setLoading(true);
                }}
                onLoadEnd={() => {
                    setLoading(false);
                }}
            />
            {
                !loading ? (
                    <View style={{ ...center, width: '100%', position: 'absolute', bottom: 0, paddingBottom: 12 }}>
                        <TouchableOpacity
                            onPress={() => {
                                if (isFavourite) {
                                    removePhoto(item.id);
                                } else {
                                    addPhoto(item);
                                }
                            }}
                        >
                            <FavouriteIcon size={48} color={isFavourite ? colors.red : colors.white}/>
                        </TouchableOpacity>
                    </View>
                ) : null
            }
            {
                loading ? (
                    <View style={styles.loadingPhoto}>
                        <ShowLoading/>
                    </View>
                ) : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    loadingPhoto: {
        ...center,
        position: 'absolute',
        width: '100%',
        height: WINDOW_HEIGHT,
    },
});

const mapStateToProps = (state) => {
    return {
        data: state.favourite.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPhoto: (item) => dispatch(addPhoto(item)),
        removePhoto: (id) => dispatch(removePhoto(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoScreen);
