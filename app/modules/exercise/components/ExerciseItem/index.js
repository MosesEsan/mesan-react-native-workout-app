import React from 'react';
import {Text, View, TouchableHighlight, TouchableOpacity, Image} from 'react-native';

import {Actions} from 'react-native-router-flux'
import {Icon} from 'react-native-elements';

import {actions} from "../../index"
import styles, {color} from "./styles"
import {connect} from "react-redux";

const { addExercise, removeExercise } = actions;


class ExerciseItem extends React.Component {
    addExercise = () => {
        const {exercise} = this.props;
        this.props.addExercise(exercise)
            .then(() => alert("Exercise Added"))
            .catch((error) => alert(error.message));
    };

    removeExercise = () => {
        const {exercise} = this.props;
        this.props.removeExercise(exercise.id)
            .then(() => alert("Exercise Removed"))
            .catch((error) => alert(error.message));
    };

    render(){
        const {exercises, exercise} = this.props;
        const {id, name, images, muscles, muscle_diagram} = exercise;

        let index = exercises.findIndex((obj) => obj.id === id);
        let iconName = (index !== -1) ? "md-remove" : "md-add";
        let onPress = (index !== -1) ? this.removeExercise : this.addExercise;

        return (
            <TouchableHighlight
                style={styles.container}
                underlayColor={"transparent"}
                onPress={() => Actions.Exercise({exercise})}>
                <View style={[styles.wrapper]}>
                    <Image source={{uri: images[0]}} style={styles.img}/>

                    <View style={[styles.info]}>
                        <Text style={[styles.name]}>
                            {name}
                        </Text>

                        <View style={[styles.muscles]}>
                            {
                                muscles.map((muscle, idx) => (
                                    <Text style={[styles.muscle]} key={idx}>
                                        {muscle}
                                    </Text>
                                ))
                            }
                        </View>
                    </View>

                    <View style={[styles.accessoryView]}>
                        <TouchableOpacity
                            style={[styles.accessoryWrapper]} onPress={onPress}
                            underlayColor={"transparent"}>
                            <Icon name={iconName}
                                  type={"ionicon"}
                                  size={14}
                                  containerStyle={{
                                      borderWidth: 1,
                                      borderColor: color.secondary,
                                      height: 17,
                                      width: 17,
                                      justifyContent: "center",
                                      alignItems: "center"
                                  }}
                                  iconStyle={{height: 14}}
                                  color={color.secondary}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        exercises: state.exerciseReducer.exercises
    }
}

export default connect(mapStateToProps, {addExercise, removeExercise})(ExerciseItem);
