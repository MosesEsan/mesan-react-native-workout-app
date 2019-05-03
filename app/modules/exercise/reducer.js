import * as t from './constants';

let initialState = { exercises:[] };

const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.EXERCISES_AVAILABLE:{
            let { exercises } = action.data;

            return {...state, exercises};
        }

        case t.ADD_EXERCISE:{
            //get the exercise passed
            let { exercise } = action.data;

            //Deep copy the current exercises variable in the state
            let clone = JSON.parse(JSON.stringify(state.exercises));

            clone.push(exercise); //add the new exercise to the top

            return {...state, exercises:clone};
        }

        case t.REMOVE_EXERCISE:{
            let { id } = action.data;

            let exercises = state.exercises;

            //Deep copy the current exercises variable in the state
            let clone = JSON.parse(JSON.stringify(exercises));

            //find the index of the reward with the event id passed
            const index = clone.findIndex((obj) => obj.id === id);

            //if the reward is in the array, remove the reward
            if (index !== -1) clone.splice(index, 1);

            return {...state, exercises:clone};
        }

        default:
            return state;

    }
};

export default exerciseReducer;