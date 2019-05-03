import React from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {connect} from 'react-redux';

import ExerciseItem from "../components/ExerciseItem"
import {Loading, Error, Empty} from "../components/SharedComponents"

import {actions} from "../index"

const {getSelectedExercises, removeExercise} = actions;

class SelectedExercises extends React.Component {
    state = {
        refreshing: false,
        isFetching: true,
        hasError: false,
        errorMsg: ""
    };

    componentDidMount() {
        this.getSelectedExercises(false);
        this.props.title = this.props.muscle
    }

    getSelectedExercises = (refreshing = true) => {
        this.setState({refreshing});

        this.props.getSelectedExercises()
            .then(() => this.setState({isFetching: false, hasError: false}))
            .catch((error) => this.setState({isFetching: false, hasError: true, errorMsg: error.message}))
            .finally(() => this.setState({refreshing: false}));
    };

    removeExercise = (exercise) => {
        this.props.removeExercise(exercise.id)
            .then(() => alert("Exercise Removed"))
    };

    renderItem = ({item, index}) => {
        const {isFetching, hasError, errorMsg} = this.state;

        if (isFetching) return <Loading/>

        if (hasError) return <Error data={{message: errorMsg, onPress: () => this.getSelectedExercises(false)}}/>

        return <ExerciseItem exercise={item} removeExercise={this.removeExercise}/>
    };

    renderEmpty = () => (
        <Empty data={{message: "There are no exercises to show...", onPress: () => this.getSelectedExercises(false)}}/>
    );

    render() {
        const {isFetching, hasError} = this.state;
        const {exercises} = this.props;

        return (
            <View>
                <FlatList
                    style={{backgroundColor: '#eaeaea'}}
                    contentContainerStyle={{}}
                    ref='listRef'
                    data={(isFetching || hasError) ? [{id: 0}] : exercises}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmpty}
                    initialNumToRender={5}
                    keyExtractor={(item, index) => index.toString() + "_selected"}
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

export default connect(mapStateToProps, {getSelectedExercises, removeExercise})(SelectedExercises);
