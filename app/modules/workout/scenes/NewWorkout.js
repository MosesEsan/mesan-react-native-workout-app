import React from 'react';
import {FlatList, View, RefreshControl, TouchableHighlight, Text} from 'react-native';
import {connect} from 'react-redux';

import ExerciseItem from "../components/ExerciseItem"
import {Loading, Error, Empty} from "../../../components/SharedComponents"

import {actions} from "../index"

const {getSelectedExercises, removeExercise} = actions;

import DraggableFlatList from 'react-native-draggable-flatlist'

class NewWorkout extends React.Component {
    state = {
        refreshing: false,
        isFetching: true,
        hasError: false,
        errorMsg: "",
        exercises: []
    };

    componentDidMount() {
        this.getSelectedExercises(false);
        this.props.title = this.props.muscle
    }

    getSelectedExercises = (refreshing = true) => {
        this.setState({refreshing});

        this.props.getSelectedExercises()
            .then((exercises) => {
                exercises.map((exercise, idx) => exercise["sets"] = []);

                this.setState({exercises,  isFetching: false, hasError: false})
            })
            .catch((error) => this.setState({isFetching: false, hasError: true, errorMsg: error.message}))
            .finally(() => this.setState({refreshing: false}));
    };

    addSet = (sets, index) => {
        let {exercises} = this.state;
        let exercise = exercises[index];

        exercise["sets"] = sets;
        exercises[index] = exercise;

        this.setState({exercises})
    };

    removeSet = (index, setIndex) => {
        let {exercises} = this.state;
        let exercise = exercises[index];
        let sets = exercise["sets"];

        sets.splice(setIndex, 1);
        this.addSet(sets, index);
    };

    removeExercise = (exercise) => {
        this.props.removeExercise(exercise.id)
            .then(() => alert("Exercise Removed"))
    };

    renderItem = ({item, index, move, moveEnd, isActive}) => {
        const {isFetching, hasError, errorMsg} = this.state;

        if (isFetching) return <Loading/>

        if (hasError) return <Error data={{message: errorMsg, onPress: () => this.getSelectedExercises(false)}}/>

        return <ExerciseItem exercise={item}
                             index={index}
                             addSet={this.addSet}
                             removeSet={this.removeSet}
                             isActive={isActive}
                             onLongPress={move}
                             onPressOut={moveEnd}/>
    };

    renderEmpty = () => (
        <Empty data={{message: "There are no exercises to show...", onPress: () => this.getSelectedExercises(false)}}/>
    );

    render() {
        const {isFetching, hasError, exercises} = this.state;


        return (
            <View style={{ flex: 1 }}>
                    <DraggableFlatList
                        style={{backgroundColor: '#eaeaea'}}
                        contentContainerStyle={{}}
                        ref='listRef'
                        data={(isFetching || hasError) ? [{id: 0}] : exercises}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        ListEmptyComponent={this.renderEmpty}
                        initialNumToRender={5}
                        keyExtractor={(zitem, index) => index.toString() + "_selected"}
                        scrollPercent={5}
                        onMoveEnd={({ data }) => this.setState({ exercises: data })}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.getSelectedExercises}
                            />
                        }/>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        exercises: state.exerciseReducer.exercises
    }
}

export default connect(mapStateToProps, {getSelectedExercises, removeExercise})(NewWorkout);
