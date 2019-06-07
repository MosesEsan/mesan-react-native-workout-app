import * as t from './constants';
import * as t2 from './../exercise/constants';
import workouts from '../../config/workouts';

let sample_workouts = workouts["workouts"]

import {AsyncStorage} from 'react-native';

class Workout {
    constructor(name) {
        this.name = name;
        this.id = this.generateUUID();
    }

    // Adding a method to the constructor
    generateUUID() {
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

        return uuid;
    }
}

//Get all Workouts
export function getWorkouts() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(t.WORKOUT_KEY, (err, result) => {
                if (!err) {
                    let workouts = (!result) ? sample_workouts : JSON.parse(result)
                    dispatch({"type": t.WORKOUTS_AVAILABLE, data: {workouts}});
                    resolve();
                }
                else reject({message: err})
            });
        })
    };
}

// Add Workout - CREATE (C)
export function addWorkout(workout) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            //Get the current value
            AsyncStorage.getItem(t.WORKOUT_KEY, (err, result) => {
                if (!err) {
                    let workouts = (!result) ? [] : JSON.parse(result);
                    workouts.push(workout)

                    AsyncStorage.setItem(t.WORKOUT_KEY, JSON.stringify(workouts), () => {
                        dispatch({"type": t.ADD_WORKOUT, data: {workouts}});
                        resolve();
                    });

                } else reject({message: "Unable to create workout, please try again !"})
            });
        })
    };
}

// Update Workout - UPDATE (U)
export function updateWorkout(workout) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            //Get the current value
            AsyncStorage.getItem(t.WORKOUT_KEY, (err, result) => {
                if (!err) {
                    if (!result) {
                        reject({message: "Workout not found"})
                    } else {
                        let workouts = JSON.parse(result);

                        //find the index of the workout with the workout id passed
                        const index = workouts.findIndex((obj) => obj.id === id);

                        //check if the workout is found
                        if (index !== -1) {
                            workouts[index] = workout;//update the workout

                            AsyncStorage.setItem(t.WORKOUT_KEY, JSON.stringify(workouts), () => {
                                dispatch({"type": t.UPDATE_WORKOUT, data: {workout}});
                                resolve();
                            });
                        } else reject({message: "Workout not found"})
                    }
                } else reject({message: "Unable to add workout, please try again !"})
            });
        })
    }
}

// Delete Workout - DELETE (D)
export function deleteWorkout(id) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            //Get the current value
            AsyncStorage.getItem(t.WORKOUT_KEY, (err, result) => {
                if (!err) {
                    if (!result) {
                        reject({message: "Workout not found"})
                    } else {
                        let workouts = JSON.parse(result);

                        //find the index of the workout with the workout id passed
                        const index = workouts.findIndex((obj) => obj.id === id);

                        //check if the workout is found
                        if (index !== -1) {
                            workouts.splice(index, 1);
                            AsyncStorage.setItem(t.WORKOUT_KEY, JSON.stringify(workouts), () => {
                                dispatch({"type": t.DELETE_WORKOUT, data: {id}});
                                resolve();
                            });
                        }
                        else reject({message: "Workout not found"})

                    }
                } else reject({message: "Unable to delete workout, please try again !"})
            });
        })
    }
}

export function getSelectedExercises() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(t2.EXERCISE_KEY, (err, result) => {
                if (!err) {
                    let exercises = (!result) ? [] : JSON.parse(result)
                    resolve(exercises);
                }
                else reject({message: err})
            });
        });
    };
}