// Description: Root Reducer

import { combineReducers } from 'redux';

import { reducer as exerciseReducer } from "../modules/exercise"
import { reducer as workoutReducer } from "../modules/workout"

// Combine all the reducers
const rootReducer = combineReducers({ exerciseReducer, workoutReducer });

export default rootReducer;