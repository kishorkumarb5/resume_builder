import * as ActionTypes from './ActionTypes';

<<<<<<< HEAD
export const resumeLoading = (state = { isLoading: true,
    errMess: null}, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_RESUME:
            return {...state, isLoading: false, errMess: null};

        case ActionTypes.RESUME_LOADING:
            return {...state, isLoading: true, errMess: null}
=======
export const resume = (state = { isLoading: true,
    errMess: null,
    resume: {}}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RESUME:
            return {...state, isLoading: false, errMess: null, resume: action.payload};

        case ActionTypes.RESUME_LOADING:
            return {...state, isLoading: true, errMess: null, resume: {}}
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8

        case ActionTypes.RESUME_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};