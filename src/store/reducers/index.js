import { combineReducers } from 'redux';
import reports from './reports';

const rootReducer = combineReducers({ reports: reports });

export default rootReducer;