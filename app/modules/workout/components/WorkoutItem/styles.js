import { StyleSheet } from 'react-native';
import { theme } from "../../index"
export const {padding, color, fontSize, fontFamily } = theme;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    wrapper:{
        padding: padding,
        paddingVertical: padding * 2,
        flexDirection: "row",
        backgroundColor:"white",
        borderBottomWidth:1,
        borderBottomColor:"#E9E9E9"
    },

    img:{
        height: 100,
        width: 100,
        backgroundColor: color.light_grey,
        marginRight: padding ,
    },

    info:{
        flex:1
    },

    name:{
        fontSize: fontSize.large - 5,
        fontFamily: fontFamily.bold,
        color: color.black,
    },

    muscles: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
        color: color.black,
        marginTop:padding/2
    },

    muscles_l: {
        color: color.secondary,
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
        width: 44,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:padding/2
    },

    accessoryWrapper:{
        height: 44, width: 44,
        justifyContent:"center",
        alignItems:"center"
    }
});


export default styles;