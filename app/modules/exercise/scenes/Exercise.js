import React from 'react';

import {View, ScrollView, Text, Image} from 'react-native';

import Swiper from "react-native-web-swiper";

import styles, {padding} from "./styles"

class Exercise extends React.Component {

    componentDidMount() {
        const {exercise} = this.props;
    }

    render() {
        const {exercise} = this.props;
        const {images, muscle_diagram} = exercise;


        let items = JSON.parse(JSON.stringify(images));
        items.unshift(muscle_diagram); //add the muscle diagram image to the top of the array

        return (
            <ScrollView style={styles.scrollViewContainer}>
                <ExerciseInfo exercise={exercise}/>
                <View style={[{height: 250}]}>
                    <Swiper key={items.length}>
                        {
                            items.map((item, idx) => (
                                    <View style={[styles.slideContainer]} key={idx + "_swiper"}>
                                        <Image source={{uri: item}} style={styles.img}/>
                                    </View>
                                )
                            )
                        }
                    </Swiper>
                </View>
                <View>
                    <MusclesWorked exercise={exercise}/>
                    <Instructions exercise={exercise}/>
                </View>
            </ScrollView>
        );
    }
}


const ExerciseInfo = ({exercise}) => {
    let {name, equipment} = exercise;
    return (
        <View style={styles.section}>
            <Text style={[styles.name]}>
                {name}
            </Text>
            <Text style={[styles.equipment]}>
                Equipment:
                <Text style={[styles.equipment_l]}>
                    {" " + equipment}
                </Text>
            </Text>
        </View>
    )
};

const MusclesWorked = ({exercise}) => {
    let {muscles} = exercise;
    return (
        <View style={[styles.section, styles.topBorder]}>
            <Text style={[styles.sectionText]}>MUSCLES WORKED</Text>
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
    )
};

const Instructions = ({exercise}) => {
    let {instructions} = exercise;
    return(
        <View style={[styles.section, styles.topBorder]}>
            <Text style={[styles.sectionText]}>INSTRUCTIONS</Text>
            <View style={[{}]}>
                {
                    instructions.map((instruction, idx) => (
                        <View style={[{flex: 1}]} key={idx}>
                            <View style={{flexDirection: "row", flex: 1}}>
                                <Text style={[styles.instruction, {marginRight: padding}]}>{'\u2022'}</Text>
                                <Text style={[styles.instruction, {flex: 1}]}>{instruction + "\n"}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
};

export default Exercise;




