import {StyleSheet} from 'react-native';
import {theme} from "../../index"

export const {padding, color, fontSize, fontFamily} = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: padding, marginBottom:padding/2,
        // borderRadius: padding,
        overflow:"hidden",
        marginTop: padding,
    },

    wrapper: {
        padding: padding * 2,
        // paddingVertical: padding * 2,
        flexDirection: "row",
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#E9E9E9"
    },

    img: {
        height: 50,
        width: 50,
        backgroundColor: color.light_grey,
        marginRight: padding,
    },

    info: {
        flex: 1
    },

    name: {
        fontSize: fontSize.large - 6,
        fontFamily: fontFamily.bold,
        color: color.light_black
    },

    equipment: {
        fontSize: fontSize.regular - 1,
        fontFamily: fontFamily.medium,
        color: color.light_black,
        marginTop: padding /2
    },

    muscles_l: {
        color: color.secondary,
    },

    accessoryView: {
        width: 34,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: padding + 2
    },

    accessoryWrapper: {
        height: 44, width: 44,
        justifyContent: "center",
        alignItems: "center",
    },

    exercises: {
        marginTop: padding - 1
    },

    date: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.regular,
        color: '#8D8D82'
    },

    exercise: {
        // flexDirection: "row",
        paddingVertical: padding - 1
    },

    text: {
        fontSize: fontSize.regular - 1,
        fontFamily: fontFamily.medium,
        color: color.light_black,
        textAlign: "center",
    },

    exercise_name: {
        flex: 1,
        textAlign: "left",
    },

    set_name: {
        flex: 1,
        textAlign: "left",
        borderWidth:1,
        marginRight: padding * 1.5
    },

    sets_reps: {
        fontFamily: fontFamily.medium,
        fontSize: fontSize.regular,
        color: "#AB1D20",
        borderWidth:1,
        marginRight: padding * 1.5
    },

    sets_reps_text:{
        fontFamily: fontFamily.regular,
        fontSize: fontSize.regular - 1,
        color: color.light_black,
    },

    weight: {
        width: 100,
        textAlign: "right",
        marginRight: 0
    },


});


export default styles;