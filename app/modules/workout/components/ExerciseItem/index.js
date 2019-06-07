import React from 'react';
import {Image, Text, TouchableHighlight, TouchableOpacity, View, StyleSheet} from 'react-native';

import {Actions} from 'react-native-router-flux'
import {Icon} from 'react-native-elements';

import RNPicker from "rn-modal-picker";
import RNPickerSelect from 'react-native-picker-select';


import {actions} from "../../index"
import styles, {color} from "./styles"
import {connect} from "react-redux";

const {addExercise, removeExercise} = actions;

const WEIGHTS = [
    {
        label: 1,
        value: 10
    },
    {
        label: 2,
        value: "Bahrain"
    },
    {
        label: 3,
        value: "Canada"
    },
    {
        label: 4,
        value: "Denmark"
    },
    {
        label: 5,
        value: "Egypt"
    },
    {
        label: 6,
        value: "France"
    },
    {
        label: 7,
        value: "Greece"
    },
    {
        label: 8,
        value: "Hong Kong"
    },
    {
        label: 9,
        value: "India"
    },
    {
        label: 10,
        value: "Japan"
    },
    {
        label: 11,
        value: "Kenya"
    },
    {
        label: 12,
        value: "Liberia"
    }
]
const REPS = [
    {
        label: 1,
        value: 1
    },
    {
        label: 2,
        value: 2
    },
    {
        label: 3,
        value: 3
    },
    {
        label: 4,
        value: 4
    },
    {
        label: 5,
        value: 5
    },
    {
        label: 6,
        value: 6
    },
    {
        label: 7,
        value: 7
    },
    {
        label: 8,
        value: 8
    },
    {
        label: 9,
        value:9
    },
    {
        label: 10,
        value: 10
    },
    {
        label: 11,
        value: 11
    },
    {
        label: 12,
        value: 12
    }
]


const sports = [
    {
        label: 'Football',
        value: 'football',
    },
    {
        label: 'Baseball',
        value: 'baseball',
    },
    {
        label: 'Hockey',
        value: 'hockey',
    },
];
class Set extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props.exercise, index:props.index,

            weightsDataSource: WEIGHTS,
            repDataSource: REPS,
            weight: WEIGHTS[0]["name"],
            reps: REPS[0]["name"],
            selectedText: ""}
    }



    _setWeight(index, name) {
        this.setState({ weight: name });
    }

    _setRep(index, name) {
        this.setState({ reps: name });
    }

    render () {
        const {set} = this.props;


        const placeholder = {
            label: 'Select a sport...',
            value: null,
            color: '#9EA0A4',
        };
        return(
            <View style={{flexDirection:"row", paddingVertical:10}}>
                <View style={[styles.sets_reps, {}]}>
                    <RNPicker
                        dataSource={this.state.weightsDataSource}
                        dummyDataSource={this.state.weightsDataSource}
                        defaultValue={false}
                        showSearchBar={false}
                        disablePicker={false}
                        changeAnimation={"none"}
                        showPickerTitle={false}
                        searchBarContainerStyle={this.props.searchBarContainerStyle}
                        pickerStyle={styles.picker}
                        selectedLabel={this.state.weight}
                        placeHolderLabel={this.state.weight}
                        selectLabelTextStyle={[styles.text, styles.sets_reps]}
                        placeHolderTextStyle={[styles.text, styles.sets_reps]}
                        // dropDownImage={require("./res/ic_drop_down.png")}
                        selectedValue={(index, name) => this._selectedValue(index, name)}
                    />

                    <Text>set placeholder to empty object</Text>
                    <RNPickerSelect
                        placeholder={{}}
                        items={sports}
                        onValueChange={(value) => {
                            this.setState({
                                favSport2: value,
                            });
                        }}
                        style={pickerSelectStyles}
                        value={this.state.favSport2}
                    />
                    <Text style={[styles.sets_reps_text]}>
                        {` kg`}
                    </Text>
                </View>

                <View style={[{justifyContent:"center",
                    alignItems:"center"}]}>
                    <Icon name={"x"}
                          type={"feather"}
                          size={12}
                          containerStyle={styles.iconContainerStyle}
                          iconStyle={{height: 12}}
                          color={color.white}/>
                </View>

                <View style={[styles.sets_reps, {}]}>
                    <RNPicker
                        dataSource={this.state.repDataSource}
                        dummyDataSource={this.state.repDataSource}
                        defaultValue={false}
                        pickerTitle={"Country Picker"}
                        showSearchBar={false}
                        disablePicker={false}
                        changeAnimation={"none"}
                        showPickerTitle={false}
                        searchBarContainerStyle={this.props.searchBarContainerStyle}
                        pickerStyle={styles.picker}
                        selectedLabel={this.state.reps}
                        placeHolderLabel={this.state.reps}
                        selectLabelTextStyle={[styles.text, styles.sets_reps]}
                        placeHolderTextStyle={[styles.text, styles.sets_reps]}
                        selectedValue={(index, name) => this._selectedValue(index, name)}
                    />
                    <Text style={[styles.sets_reps_text]}>
                        {` reps`}
                    </Text>
                </View>
            </View>
        )
    }
}


class ExerciseItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props.exercise, index:props.index,

            dataSource: [
                {
                    label: 1,
                    value: 10
                },
                {
                    label: 2,
                    value: "Bahrain"
                },
                {
                    label: 3,
                    value: "Canada"
                },
                {
                    label: 4,
                    value: "Denmark"
                },
                {
                    label: 5,
                    value: "Egypt"
                },
                {
                    label: 6,
                    value: "France"
                },
                {
                    label: 7,
                    value: "Greece"
                },
                {
                    label: 8,
                    value: "Hong Kong"
                },
                {
                    label: 9,
                    value: "India"
                },
                {
                    label: 10,
                    value: "Japan"
                },
                {
                    label: 11,
                    value: "Kenya"
                },
                {
                    label: 12,
                    value: "Liberia"
                }
            ],
            placeHolderText: "Please Select Country",
            selectedText: ""}
    }


    addSet = () => {
        let {sets, index} = this.state;
        sets.push({weight: 10, reps: 5});

        this.setState({sets},  this.props.addSet(sets, index));
    };

    removeExercise = () => {
        const {exercise} = this.props;
        this.props.removeExercise(exercise.id)
            .then(() => alert("Exercise Removed"))
            .catch((error) => alert(error.message));
    };

    render() {
        const {exercises, exercise} = this.props;
        const {id, name, images, sets, equipment} = this.state;


        return (
            <TouchableHighlight
                style={styles.container}
                underlayColor={"transparent"}
                onPress={() => Actions.Exercise({exercise:this.state, title: name})}
                {...this.props}>
                <View style={[styles.wrapper]}>


                    <View style={[styles.info]}>
                        <View style={{flexDirection: "row"}}>
                            <Image source={{uri: images[0]}} style={styles.img}/>
                            <View style={{flex: 1}}>
                                <Text style={[styles.name]}>
                                    {name}
                                </Text>

                                <Text style={[styles.equipment]}>
                                    Equipment Needed:
                                    <Text style={[styles.muscles_l]}>
                                        {" " + equipment}
                                    </Text>
                                </Text>
                            </View>
                            <View style={[styles.accessoryView]}>
                                <View
                                    style={[styles.accessoryWrapper]}
                                    underlayColor={"transparent"}>
                                    <Icon name={"md-menu"}
                                          type={"ionicon"}
                                          size={19}
                                          containerStyle={{
                                              height: 19,
                                              width: 19,
                                              justifyContent: "center",
                                              alignItems: "center"
                                          }}
                                          iconStyle={{height: 19}}
                                          color={color.grey}/>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingVertical: 8}}>
                        {
                            sets.map((set, idx) => {
                                return (<Set set={set}/>
                                )
                            })
                        }

                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={[styles.button, styles.leftButton]} onPress={this.addSet}  underlayColor={"transparent"}>
                            <Text style={styles.buttonText}>+ Add Set</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}  onPress={this.removeExercise}  underlayColor={"transparent"}>
                            <Text style={[styles.buttonText, {color:"#AD393E"}]}>Remove</Text>
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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'red',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});