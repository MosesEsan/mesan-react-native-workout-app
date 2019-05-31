import React from 'react';
import {Text, TouchableHighlight, View, Image, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux'
import {Icon} from 'react-native-elements';

import styles from "./styles"
import {color} from "../../../exercise/components/ExerciseItem/styles";

class WorkoutExerciseItem extends React.Component {
    render() {
        const {exercise} = this.props;
        let {id, name, images, muscles, equipment, sets, reps} = exercise;

        return (
            <TouchableHighlight
                style={styles.container}
                underlayColor={"transparent"}
                onPress={() => Actions.Exercise({exercise, title: name})}>
                <View style={[styles.wrapper]}>
                    <View style={[styles.info]}>
                        <View style={{flexDirection: "row"}}>
                            <Image source={{uri: images[0]}} style={styles.img}/>
                            <View style={{flex:1}}>
                                <Text style={[styles.name]}>
                                    {name}
                                </Text>

                                <Text style={[styles.equipment]}>
                                    Equipment Needed:
                                    <Text style={[styles.muscles_l]}>
                                        {" "+equipment}
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
                                sets.map((set, idx) => {
                                    return(
                                        <View style={styles.exercise} key={idx}>
                                            <Text style={[styles.text, styles.exercise_name]}>
                                                {`Set ${idx + 1}`}
                                            </Text>
                                            <Text style={[styles.text, styles.sets_reps]}>
                                                {`${set.reps}`}
                                            </Text>
                                            <Text style={[styles.text, styles.weight]}>
                                                {`${set.weight}kg`}
                                            </Text>
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


export default WorkoutExerciseItem;

