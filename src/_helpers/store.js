import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

const middleWares = [thunkMiddleware]

if(process.env.NODE_ENV !== 'production'){
    middleWares.push(loggerMiddleware);
}

export const store = createStore(
    rootReducer,
    applyMiddleware(
        ...middleWares
    )
);