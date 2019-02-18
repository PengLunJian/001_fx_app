import {createStore} from 'redux';
import TOTAL_REDUCERS from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    TOTAL_REDUCERS,
    composeWithDevTools()
);

export default store;