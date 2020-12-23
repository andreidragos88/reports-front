import * as actionTypes from '../constants/actionTypes';

const initialState = {
    reports: [],
    loading: false,
    totalPages: 0
}

const reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.FETCH_REPORTS_START:
            newState = {
                ...state,
                loading: true,
                totalPages: 0
            }
            break;

        case actionTypes.FETCH_REPORTS_SUCCESS:
            newState = {
                ...state,
                reports: action.reports,
                loading: false,
                totalPages: action.totalPages
            }
            break;

        case actionTypes.FETCH_REPORTS_FAIL:
            newState = {
                ...state,
                loading: false
            }
            break;

        default:
            newState = state;
    }

    return newState;
}

export default reducer;