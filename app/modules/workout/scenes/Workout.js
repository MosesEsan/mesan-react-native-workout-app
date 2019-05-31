import React from 'react';
import {FlatList, View} from 'react-native';

import WorkoutExerciseItem from "../components/WorkoutExerciseItem"
import {Empty} from "../../../components/SharedComponents"

class Workout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workout: props.workout
        }
    }

    renderItem = ({item, index}) => {
        return <WorkoutExerciseItem exercise={item}/>
    };

    renderEmpty = () => (
        <Empty data={{message: "There are no exercises in this workout..."}}/>
    );

    render() {
        const {workout} = this.state;
        const {exercises} = workout;

        return (
            <View>
                <FlatList
                    style={{backgroundColor: '#eaeaea'}}
                    contentContainerStyle={{}}
                    ref='listRef'
                    data={exercises}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmpty}
                    initialNumToRender={5}
                    keyExtractor={(item, index) => index.toString() + "_workout_exercise"}/>
            </View>
        );
    }
}

export default Workout;
