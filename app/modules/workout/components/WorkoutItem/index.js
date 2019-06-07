import React from 'react';
import {Text, TouchableHighlight, View, Image, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux'
import {Icon} from 'react-native-elements';

import styles from "./styles"

class WorkoutItem extends React.Component {
    render() {
        const {workout} = this.props;
        const {name, muscles, dateCreated, exercises} = workout;

        return (
            <TouchableHighlight
                style={styles.container}
                underlayColor={"transparent"}
                onPress={() => Actions.Workout({workout, title: name})}>
                <View style={[styles.wrapper]}>
                    <View style={[styles.info]}>
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex:1}}>
                                    <Text style={[styles.name]}>
                                        {name}
                                    </Text>

                                <Text style={[styles.equipment]}>
                                    Muscles Worked:
                                    <Text style={[styles.muscles_l]}>
                                        {" "+muscles.join(" ,")}
                                    </Text>
                                </Text>
                            </View>



                            <View style={[styles.accessoryView]}>
                                <TouchableOpacity
                                    style={[styles.accessoryWrapper]} onPress={() => alert("menu")}
                                    underlayColor={"transparent"}>
                                    <Icon name={"ios-more"}
                                          type={"ionicon"}
                                          size={20}
                                          containerStyle={{
                                              height: 44,
                                              width: 34,
                                              justifyContent: "center",
                                              alignItems: "center"
                                          }}
                                          iconStyle={{height: 20}}
                                          color={'#8D8D82'}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.exercises}>
                            {
                                exercises.map((exercise, idx) => {
                                    return(
                                        <View style={styles.exercise} key={idx}>
                                            <Text style={[styles.text, styles.exercise_name]}>
                                                {exercise.name}
                                            </Text>
                                            <View style={{borderWidth:1, borderColor:"red", flex:1, flexDirection: "row"}}>
                                                <View style={{flexDirection: "row", flex:1}}>
                                                    <Text style={[styles.text, styles.sets_reps, {borderWidth:1, textAlign:"left"}]}>
                                                        {getReps (exercise.sets)}
                                                        <Text style={[styles.text, styles.sets_reps, styles.sets_reps_text]}>
                                                            {` reps`}
                                                        </Text>
                                                    </Text>
                                                    <Text style={[styles.text, styles.sets_reps, {borderWidth:1}]}>
                                                        {exercise.sets.length}
                                                        <Text style={[styles.text, styles.sets_reps, styles.sets_reps_text]}>
                                                            {` sets`}
                                                        </Text>
                                                    </Text>
                                                </View>
                                                <Text style={[styles.text, styles.sets_reps, styles.weight, {borderWidth:1}]}>
                                                    {`${exercise.sets[0]["weight"]}`}
                                                    <Text style={[styles.sets_reps_text]}>
                                                        {` kg`}
                                                    </Text>
                                                </Text>
                                            </View>
                                        </View>
                                    )

                                })
                            }

                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
};

function extractReps(sets){
    let same = true;
    let all_reps = []
    let current = sets[0]["reps"]

    sets.map((set, idx) => {
        let reps = set.reps;
        all_reps.push(reps)

        if (idx > 0){
            //compare it to the previous reps value
            if (same === true && reps !== current) same = false;
        }
    });

    return (same === true) ? `${sets.length} x ${current}` : all_reps.join("/");
}

function getReps(sets){
    let same = true;
    let all_reps = []
    let current = sets[0]["reps"]

    sets.map((set, idx) => {
        let reps = set.reps;
        all_reps.push(reps)

        if (idx > 0){
            //compare it to the previous reps value
            if (same === true && reps !== current) same = false;
        }
    });

    return (same === true) ? `${current}` : all_reps.join("/");
}


export default WorkoutItem;



