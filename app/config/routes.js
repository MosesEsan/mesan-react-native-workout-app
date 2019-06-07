import React from 'react';

import {Scene, Router, Stack, Tabs} from 'react-native-router-flux';

import TabIcon from '../components/TabIcon';
import Main from '../modules/exercise/scenes/Main'
import Exercises from '../modules/exercise/scenes/Exercises'
import Exercise from '../modules/exercise/scenes/Exercise'
import Selected from '../modules/exercise/scenes/Selected'

import Workouts from '../modules/workout/scenes/Workouts'
import Workout from '../modules/workout/scenes/Workout'
import NewWorkout from '../modules/workout/scenes/NewWorkout'

import {color, navTitleStyle, tabIconStyle, navigationBarStyle, fontFamily} from "../config/theme";
import {StatusBar} from "react-native";

const HomeIcon = {...tabIconStyle, type: "font-awesome", name: "home", size: 30, iconSize: 30};
const SelectedIcon = {...tabIconStyle, type: "ionicon", name: "md-basket", size: 30, iconSize: 30, showBadge: true};
const WorkoutIcon = {...tabIconStyle, type: "material-community", name: "weight", size: 30, iconSize: 30};

export default class extends React.Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content', true)
    }

    render() {
        let tabProps = {
            showLabel: false,
            swipeEnabled: false,
            animationEnabled: false,
            tabBarPosition: 'bottom',
            titleStyle: navTitleStyle,
            navBarButtonColor: color.white,
            tabBarStyle: {backgroundColor: color.main, borderTopWidth: 0},
            navigationBarStyle
        };

        let logoStyle = {color: color.secondary, fontSize:19, fontFamily:fontFamily.bold};

        return (
            <Router>
                <Stack key="root" hideNavBar={true} titleStyle={navTitleStyle} >
                    <Tabs key="Main" tabs lazy {...tabProps}>
                        <Stack key="ExerciseTab" icon={TabIcon} iconInfo={HomeIcon}>
                            <Scene key="Main" component={Main} title="meWorkout" initial titleStyle={[navTitleStyle, logoStyle]}/>
                            <Scene key="Exercises" component={Exercises}  back/>
                            <Scene key="Exercise" component={Exercise} back />
                        </Stack>
                        <Stack key="SelectedTab" icon={TabIcon} iconInfo={SelectedIcon}>
                            <Scene key="Selected" component={Selected} title="Exercise List"/>
                        </Stack>
                        <Stack key="WorkoutTab" icon={TabIcon} iconInfo={WorkoutIcon}>
                            <Scene key="Workouts" component={Workouts} title="Workouts" initial/>
                            <Scene key="Workout" component={Workout} title="Workout Exercises" back/>
                            <Scene key="NewWorkout" component={NewWorkout} title="NewWorkout" back/>
                        </Stack>
                    </Tabs>
                </Stack>
            </Router>
        )
    }
}