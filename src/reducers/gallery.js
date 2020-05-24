import { GET_PHOTOS, RECEIVE_PHOTOS } from '../actions/actionTypes';

const initialState = {
    loading: false,
    data: []
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS: {
            return { ...state, loading: true };
        }
        case RECEIVE_PHOTOS: {
            const data = action.value;

            return { ...state, loading: false, data };
        }
        default:
            return { ...state };
    }
};

export default galleryReducer;
