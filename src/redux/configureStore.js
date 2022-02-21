import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {RESUME_DATA} from '../data/resume_data';
import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            isLoading: false,
            ...createForms({
                resume: RESUME_DATA
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}