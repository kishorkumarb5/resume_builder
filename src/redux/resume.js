import * as ActionTypes from './ActionTypes';

export const resumeLoading = (state = { isLoading: true,
    errMess: null}, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_RESUME:
            return {...state, isLoading: false, errMess: null};

        case ActionTypes.RESUME_LOADING:
            return {...state, isLoading: true, errMess: null}

        case ActionTypes.RESUME_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};