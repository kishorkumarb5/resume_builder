import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
<<<<<<< HEAD
import {RESUME_DATA} from '../data/resume_data';
import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            isLoading: false,
            ...createForms({
                resume: RESUME_DATA
=======
import { createForms } from 'react-redux-form';

import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}