import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import {Actions} from 'react-native-router-flux'

import styles from "./styles"

const WorkoutItem = (workout) => {
    const {name, muscles, dateCreated, exercises} = workout;
    return (
        <TouchableHighlight
            style={styles.container}
            underlayColor={"transparent"}
            onPress={() => Actions.Workout({exercise, title: name})}>
            <View style={[styles.wrapper]}>
                <View style={[styles.info]}>
                    <Text style={[styles.name]}>
                        {name}
                    </Text>
                    <Text style={[styles.muscles]}>
                        Muscles Worked:
                        <Text style={[styles.muscles_l]}>
                            {" " + JSON.parse(muscles)}
                        </Text>
                    </Text>
                    <Text style={[styles.muscles_l]}>
                        Created: {dateCreated}
                    </Text>
                </View>

                <View style={[styles.accessoryView, {borderWidth: 1, borderColor: "red"}]}>
                </View>
            </View>
        </TouchableHighlight>
    );

};

export default WorkoutItem;

