import { ADD_PHOTO, REMOVE_PHOTO } from '../actions/actionTypes';

const initialState = {
    data: []
};

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO: {
            const newItem = action.value;
            const data = [...state.data, newItem];

            return { ...state, data };
        }
        case REMOVE_PHOTO: {
            const id = action.value;
            const data = [...state.data];
            const index = data.findIndex(item => item.id === id);

            if (index !== -1) {
                data.splice(index, 1);
            }
            return { ...state, data };
        }
        default:
            return { ...state };
    }
};

export default favouriteReducer;
