import {StyleSheet} from 'react-native';
import {theme} from "../../index"

export const {padding, color, fontSize, fontFamily} = theme;

let CIRCLE_RADIUS = 30;

const styles = StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    }
});


export default styles;