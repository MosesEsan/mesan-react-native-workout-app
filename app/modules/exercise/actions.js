import * as t from './constants';
import exercises from '../../config/data';

import {AsyncStorage} from 'react-native';

export function getExercises(muscle) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            let keys = Object.keys(exercises);
            if (keys.includes(muscle.toLowerCase())) {
                let result = exercises[muscle.toLowerCase()]
                resolve(result)
            } else {
                reject({message: "Category not found"})
            }
        });
    };
}

export function addExercise(exercise) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            //Get the current value
            AsyncStorage.getItem(t.EXERCISE_KEY, (err, result) => {
                if (!err) {
                    let exercises = (!result) ? [] : JSON.parse(result);

                    //find the index of the exercise with the  id passed
                    const index = findExerciseIndex(exercises, exercise.id);

                    //check if the execercie is already in the list
                    if (index !== -1) reject({message: "Exercise has previously being selected"})
                    else exercises.push(exercise)

                    AsyncStorage.setItem(t.EXERCISE_KEY, JSON.stringify(exercises), () => {
                        dispatch({"type": t.ADD_EXERCISE, data: {exercise}});
                        resolve();
                    });

                } else reject({message: "Unable to add exercise, please try again !"})
            });
        });
    };
}

export function removeExercise(id) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            //Get the current value
            AsyncStorage.getItem(t.EXERCISE_KEY, (err, result) => {
                if (!err) {
                    let exercises = (!result) ? [] : JSON.parse(result)

                    //find the index of the exercise with the  id passed
                    const index = findExerciseIndex(exercises, id);

                    //if the exercise is in the array, remove the exercise
                    if (index !== -1) {
                        exercises.splice(index, 1);
                        AsyncStorage.setItem(t.EXERCISE_KEY, JSON.stringify(exercises), () => {
                            dispatch({"type": t.REMOVE_EXERCISE, data: {id}});
                            resolve();
                        });
                    }else{
                        reject({message: "Exercise not found"})
                    }
                } else reject({message: "Unable to add exercise, please try again !"})
            });
        });
    };
}

export function getSelectedExercises() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(t.EXERCISE_KEY, (err, result) => {
                if (!err) {
                    let exercises = (!result) ? [] : JSON.parse(result)
                    dispatch({"type": t.EXERCISES_AVAILABLE, data: {exercises}});
                    resolve();
                }
                else reject({message: err})
            });
        });
    };
}

function findExerciseIndex(exercises, id){
    //find the index of the exercise with the  id passed
    return exercises.findIndex((obj) => obj.id === id);
}