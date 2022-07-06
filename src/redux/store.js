import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import imagesReducer from './images/images'

const rootReducer = combineReducers({
    imagesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;