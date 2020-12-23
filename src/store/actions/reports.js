import * as reportsConstants from '../constants/actionTypes'
import { getAll } from '../../services/reports';

export const getReports = (filters, page) => dispatch => {
	dispatch(loading());
	return getAll(filters, page)
		.then(reports => dispatch({ type: reportsConstants.FETCH_REPORTS_SUCCESS, reports: reports.data, totalPages: reports.totalPages }))
		.catch(error => dispatch(failure(error.toString())));
};


const failure = (error) => ({ type: reportsConstants.FETCH_REPORTS_FAIL, error });

const loading = () => ({ type: reportsConstants.FETCH_REPORTS_START })
