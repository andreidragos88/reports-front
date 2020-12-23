import reducer from './reports';
import * as types from '../constants/actionTypes';

describe('reports reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            reports: [],
            loading: false,
            totalPages: 0
        })
    })

    it('should handle FETCH_REPORTS_START', () => {
        expect(
            reducer([], {
                type: types.FETCH_REPORTS_START
            })
        ).toEqual({
            loading: true,
            totalPages: 0
        })
    })

    it('should handle FETCH_REPORTS_SUCCESS', () => {
        expect(
            reducer([], {
                type: types.FETCH_REPORTS_SUCCESS,
                reports: [{ test: 'test' }],
                totalPages: 1
            })
        ).toEqual({
            loading: false,
            reports: [{ test: 'test' }],
            totalPages: 1
        })
    })
})