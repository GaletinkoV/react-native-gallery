import { ADD_PHOTO, REMOVE_PHOTO } from '../actions/actionTypes';

export const addPhoto = (item) => ({
   type: ADD_PHOTO,
   value: item
});

export const removePhoto = (id) => ({
   type: REMOVE_PHOTO,
   value: id
});
