import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';

import ExerciseItem from "../components/ExerciseItem"
import { Loading, Error, Empty } from "../components/SharedComponents"

import { actions } from "../index"

const { getExercises } = actions;

class Exercises extends React.Component {
    state = {
        refreshing: false,
        isFetching: true,
        exercises: [],
        hasError: false,
        errorMsg: ""
    };

    componentDidMount() {
        this.getExercises(false);
        this.props.title = this.props.muscle
    }

    getExercises = (refreshing = true) => {
        this.setState({refreshing});

        let muscle = this.props.muscle;

        this.props.getExercises(muscle)
            .then((exercises) => this.setState({isFetching:false, exercises, hasError:false}))
            .catch((error) => this.setState({isFetching:false, hasError:true, errorMsg:error.message}))
            .finally(() => this.setState({refreshing: false}));
    };

    renderItem = ({item, index}) => {
        const {isFetching, hasError,errorMsg} = this.state;

        if (isFetching) return <Loading/>

        if (hasError) return <Error data={{message: errorMsg, onPress: () => this.getExercises(false)}}/>

        return <ExerciseItem exercise={item} idx={index.toString() + "_exerciseItem"}/>
    };

    renderEmpty = () => (
        <Empty data={{message:"There are no exercises to show...", onPress: () => this.getExercises(false)}}/>
    );

    render() {
        const {exercises, isFetching, hasError} = this.state;
        return (
                <FlatList
                    style={{backgroundColor: '#eaeaea'}}
                    contentContainerStyle={{}}
                    ref='listRef'
                    data={(isFetching || hasError) ? [{id: 0}] : exercises}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmpty}
                    initialNumToRender={5}
                    keyExtractor={(item, index) => index.toString() + "_exercise"}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getExercises}
                        />
                    }/>
        );
    }
}

export default connect(null, { getExercises })(Exercises);

