// Description: Root Reducer

import { combineReducers } from 'redux';

import { reducer as exerciseReducer } from "../modules/exercise"

// Combine all the reducers
const rootReducer = combineReducers({ exerciseReducer });

export default rootReducer;