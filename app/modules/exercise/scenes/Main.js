import React from 'react';

import {View, Text} from 'react-native';

import {connect} from 'react-redux';


import {actions} from "../index";
const {getWorkouts} = actions;

import MuscleItem from "../components/MuscleItem"

import styles from "./styles"

class Main extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headline}>
                    <View style={styles.row}>
                        <Text style={[styles.col, styles.headlineText]}>{"Choose a Workout"}</Text>
                        <Text style={[styles.instructions]}>Choose a category below to see a list of exercises available.</Text>
                    </View>
                </View>

                <View style={[styles.musclesContainer]}>
                    <View style={[styles.row, {flexDirection: "row"}]}>
                        <MuscleItem muscle={"Chest"} image={require('../../../assets/images/noun_chest_788750.png')}/>
                        <MuscleItem muscle={"Arms"} image={require('../../../assets/images/noun_Bicep_61523_000000.png')}/>
                    </View>
                    <View style={[styles.row, {flexDirection: "row"}]}>
                        <MuscleItem muscle={"Abs"} image={require('../../../assets/images/noun_abs_955981.png')}/>
                        <MuscleItem muscle={"Legs"} image={require('../../../assets/images/noun_leg_1864530.png')}/>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(null, {getWorkouts})(Main);