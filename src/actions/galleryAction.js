import { GET_PHOTOS, RECEIVE_PHOTOS } from './actionTypes';

const tokenApi = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

export const getPhotos = () => async dispatch => {
    dispatch({ type: GET_PHOTOS });

    const data = await fetch(tokenApi)
        .then(res => res.json())
        .then(data => data);

    dispatch({type: RECEIVE_PHOTOS, value: data});
};
