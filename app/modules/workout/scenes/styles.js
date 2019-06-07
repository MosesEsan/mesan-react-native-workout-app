import {StyleSheet} from 'react-native';
import {theme} from "../index"

export const {padding, color, fontSize, fontFamily} = theme;

const styles = StyleSheet.create({
    //Main Scene
    container: {
        flex: 1
    },

    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#03A9F4',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 25,
        color: 'white'
    }
});


export default styles;