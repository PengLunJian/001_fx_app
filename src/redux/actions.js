import apis from '../apis';
import store from './store';
import axios from '../http';
import * as ACTION_TYPES from './actionTypes';

/**
 *
 * @param type
 * @param data
 */
const commit = (type, data) => {
    store.dispatch({
        type,
        data,
    })
}
/**
 *
 * @param dispatch
 * @param data
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectAccount = (data) => {
    commit(ACTION_TYPES.SELECT_ACCOUNT_REQUEST);
    return new Promise((resolve, reject) => {
        axios.post(apis.selectAccount, data)
            .then((res) => {
                res = res || {};
                const {data, success} = res;
                if (success) {
                    commit(ACTION_TYPES.SELECT_ACCOUNT_SUCCESS, data);
                } else {
                    commit(ACTION_TYPES.SELECT_ACCOUNT_FAILURE);
                }
                resolve(res);
            })
            .catch((err) => {
                commit(ACTION_TYPES.SELECT_ACCOUNT_FAILURE);
                reject(err);
            });
    });
}
/**
 *
 * @param dispatch
 * @param data
 * @returns {Promise<any>}
 */
export const ajaxRequestSelectProducts = (data) => {
    commit(ACTION_TYPES.SELECT_PRODUCTS_REQUEST);
    return new Promise((resolve, reject) => {
        axios.post(apis.selectProducts, data)
            .then((res) => {
                res = res || {};
                const {data, success} = res;
                if (success) {
                    commit(ACTION_TYPES.SELECT_PRODUCTS_SUCCESS, data);
                } else {
                    commit(ACTION_TYPES.SELECT_PRODUCTS_FAILURE);
                }
                resolve(res);
            })
            .catch((err) => {
                commit(ACTION_TYPES.SELECT_PRODUCTS_FAILURE);
                reject(err);
            });
    });
}