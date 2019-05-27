import {theme} from "../../index"

export const {color, fontFamily, fontSize, padding, windowHeight, navbarHeight} = theme;

const styles = {
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight - navbarHeight,
        backgroundColor: color.white,
    },

    message: {
        fontFamily: fontFamily.medium,
        fontSize: fontSize.regular,
        lineHeight: fontSize.regular + 4,
        color: color.black,
        marginVertical: padding
    },

    wrapper:{
        paddingHorizontal:15,
        paddingBottom: padding * 2,
        justifyContent:"center",
        alignItems:"center"
    },

    title: {
        fontFamily: fontFamily.bold,
        fontSize: fontSize.large,
        color: color.white,
    },

    containerView:{
        marginVertical: padding * 2,
        width: 140
    },

    button:{
        backgroundColor: color.main,
        height: 35,
    },

    buttonText:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.medium,
        color: color.white,
    }
};

export default styles;
