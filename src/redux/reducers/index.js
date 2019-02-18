import {combineReducers} from 'redux';
import USER_REDUCER from './userReducer';
import HOME_REDUCER from './homeReducer';

/**
 *
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const TOTAL_REDUCERS = combineReducers({
    USER_REDUCER,
    HOME_REDUCER
});

export default TOTAL_REDUCERS;