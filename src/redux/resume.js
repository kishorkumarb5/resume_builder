import * as ActionTypes from './ActionTypes';

export const resume = (state = { isLoading: true,
    errMess: null,
    resume: {}}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RESUME:
            return {...state, isLoading: false, errMess: null, resume: action.payload};

        case ActionTypes.RESUME_LOADING:
            return {...state, isLoading: true, errMess: null, resume: {}}

        case ActionTypes.RESUME_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};