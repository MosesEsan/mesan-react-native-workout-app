import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppLoading } from 'expo';

import { Scene, Router, Stack } from 'react-native-router-flux';

import { color, navTitleStyle } from "../config/theme";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        }
    }

    componentDidMount() {
        var me = this;
        setTimeout(function(){
            me.setState({isReady: true})
        }, 1000)
    }

    render() {
        if (!this.state.isReady)
            return <AppLoading/>


        return (
            <Router>
                <Stack key="root"
                       navigationBarStyle={{backgroundColor: "#fff"}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}>

                    <Scene key="Main" component={Main} title="Main" initial/>
                </Stack>
            </Router>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});