import React from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {connect} from 'react-redux';

import WorkoutItem from "../components/WorkoutItem"
import {Loading, Error, Empty} from "../../../components/SharedComponents"

import {actions} from "../index"

const {getWorkouts, deleteWorkout} = actions;

class Workouts extends React.Component {
    state = {
        refreshing: false,
        isFetching: true,
        hasError: false,
        errorMsg: ""
    };

    componentDidMount() {
        this.getWorkouts(false);
        this.props.title = this.props.muscle
    }

    getWorkouts = (refreshing = true) => {
        this.setState({refreshing});

        this.props.getWorkouts()
            .then(() => this.setState({isFetching: false, hasError: false}))
            .catch((error) => this.setState({isFetching: false, hasError: true, errorMsg: error.message}))
            .finally(() => this.setState({refreshing: false}));
    };

    deleteWorkout = (workout) => {
        this.props.deleteWorkout(workout.id)
            .then(() => alert("Workout Removed"))
    };

    renderItem = ({item, index}) => {
        const {isFetching, hasError, errorMsg} = this.state;

        if (isFetching) return <Loading/>

        if (hasError) return <Error data={{message: errorMsg, onPress: () => this.getWorkouts(false)}}/>

        return <WorkoutItem workout={item}/>
    };

    renderEmpty = () => (
        <Empty data={{message: "There are no workouts to show...", onPress: () => this.getWorkouts(false)}}/>
    );

    render() {
        const {isFetching, hasError} = this.state;
        const {workouts} = this.props;

        return (
                <FlatList
                    style={{backgroundColor: '#eaeaea'}}
                    contentContainerStyle={{}}
                    ref='listRef'
                    data={(isFetching || hasError) ? [{id: 0}] : workouts}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmpty}
                    initialNumToRender={5}
                    keyExtractor={(item, index) => index.toString() + "_workout"}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getWorkouts}
                        />
                    }/>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        workouts: state.workoutReducer.workouts
    }
}

export default connect(mapStateToProps, {getWorkouts, deleteWorkout})(Workouts);
