import userReducers from './userReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userReducers,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
