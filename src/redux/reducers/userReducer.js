import * as ACTION_TYPES from "../actionTypes";
import * as states from "../states";

/**
 *
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
const USER_REDUCER = (state = states.USER_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.SELECT_ACCOUNT_REQUEST:
            return {
                ...state,
                account: Object.assign({}, state.account, {
                    isLoading: true,
                    isSuccess: false,
                    isFailure: false,
                    data: null
                })
            };
        case ACTION_TYPES.SELECT_ACCOUNT_SUCCESS:
            return {
                ...state,
                account: Object.assign({}, state.account, {
                    isLoading: false,
                    isSuccess: true,
                    isFailure: false,
                    data: action.data
                })
            };
        case ACTION_TYPES.SELECT_ACCOUNT_FAILURE:
            return {
                ...state,
                account: Object.assign({}, state.account, {
                    isLoading: true,
                    isSuccess: false,
                    isFailure: false,
                    data: null
                })
            };
        default:
            return state;
    }
};

export default USER_REDUCER;