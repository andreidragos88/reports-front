import { getReports } from './reports.js';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import * as types from '../constants/actionTypes';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

var mock = new MockAdapter(axios);

mock.onGet(`http://localhost:4000/reports?page=0`).reply(200, {
    data: []
});

const store = mockStore({})

describe('async actions', () => {
    beforeEach(() => store.clearActions());

    afterEach(() => mock.restore());

    it('should get FETCH_REPORTS_START and FETCH_REPORTS_SUCCESS', () => {
        const expectedActions = [
            { type: types.FETCH_REPORTS_START },
            { type: types.FETCH_REPORTS_SUCCESS, reports: [] }
        ];

        return store.dispatch(getReports({}, 0)).then(() => expect(store.getActions()).toEqual(expectedActions));
    })
})