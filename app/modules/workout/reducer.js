import * as t from './constants';

let initialState = { workouts:[] };

const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.WORKOUTS_AVAILABLE:{
            let { workouts } = action.data;

            return {...state, workouts};
        }

        case t.ADD_WORKOUT:{
            //get the workout passed
            let { workout } = action.data;

            //Deep copy the current workouts variable in the state
            let clone = JSON.parse(JSON.stringify(state.workouts));

            clone.push(workout); //add the new workout to the top

            return {...state, workouts:clone};
        }

        case t.UPDATE_WORKOUT:{
            //get the workout passed
            let { workout } = action.data;

            let workouts = state.workouts;

            //Deep copy the current workouts variable in the state
            let clone = JSON.parse(JSON.stringify(workouts));

            //find the index of the reward with the event id passed
            const index = clone.findIndex((obj) => obj.id === id);

            if (index !== -1) clone[index] = workout;

            return {...state, workouts:clone};
        }

        case t.DELETE_WORKOUT:{
            let { id } = action.data;

            let workouts = state.workouts;

            //Deep copy the current workouts variable in the state
            let clone = JSON.parse(JSON.stringify(workouts));

            //find the index of the reward with the event id passed
            const index = clone.findIndex((obj) => obj.id === id);

            //if the reward is in the array, remove the reward
            if (index !== -1) clone.splice(index, 1);

            return {...state, workouts:clone};
        }

        default:
            return state;

    }
};

export default workoutReducer;