import { StyleSheet } from 'react-native';
import { theme } from "../../index"
import {windowWidth} from "../../../../config/theme";
export const {padding, color, fontSize, fontFamily } = theme;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: padding, marginBottom:padding/2,
        borderRadius: padding,
        overflow:"hidden",
        marginTop: padding,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },

    wrapper:{
        paddingVertical: padding * 2,
        paddingBottom:0,
        // flexDirection: "row",
        backgroundColor:"white",
        flex: 1,
    },

    img:{
        height: 60,
        width: 60,
        backgroundColor: color.light_grey,
        marginRight: padding ,
    },

    info:{
        flex:1,
        paddingHorizontal: padding,
    },

    name:{
        fontSize: fontSize.large - 7,
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

    muscles:{
        flexDirection: "row",
        marginTop:padding * 2,
    },

    muscle:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.white,
        lineHeight: fontSize.small+5,
        paddingVertical: 2.5,
        paddingHorizontal: padding,
        marginRight:padding - 2,
        backgroundColor: color.secondary
    },

    accessoryView:{
        width: 34,
        height: 34,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:padding * 2
    },

    accessoryWrapper:{
        height: 44, width: 44,
        justifyContent:"center",
        alignItems:"center"
    },


    exercise: {
        flexDirection: "row", paddingVertical: padding - 1
    },

    text: {
        fontSize: fontSize.regular - 1,
        fontFamily: fontFamily.medium,
        color: color.light_black,
        textAlign: "right",
        flex: 1
    },

    set_name: {
        flex: 1,
        // textAlign: "left",
        marginRight: padding * 1.5
    },

    sets_reps: {
        fontFamily: fontFamily.medium,
        fontSize: fontSize.regular + 6,
        color: "#AB1D20",
        width: 100,
        letterSpacing: .5,
        flex: 1,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        fontFamily: fontFamily.bold,
        // textAlign: "right",
        marginRight: 0,
        color: "#AB1D20",
    },

    picker: {
        width: 80,
        letterSpacing: .5
    },

    sets_reps_text:{
        fontFamily: fontFamily.medium,
        fontSize: fontSize.regular - 1,
        color: color.light_black,
        marginLeft: 22,
        flex: 1,
    },



    buttonsContainer:{
        flex:1, flexDirection:"row", borderTopWidth:1, borderColor: "#A7A9AA"
    },

    button:{
        height: 45, width: (windowWidth - (padding *2))/2,
        justifyContent:"center",
        alignItems:"center"
    },

    leftButton:{
        borderRightWidth:1, borderColor: "#A7A9AA"
    },

    buttonText: {fontSize: 16, textAlign: "center", color:"#0C7ACF"
    },

    iconContainerStyle:{
        height: 17,
        width: 17,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.secondary, borderRadius:17/2
    }



});


export default styles;