import {StyleSheet} from 'react-native';
import {theme} from "../../index"

export const {padding, color, fontSize, fontFamily} = theme;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center", paddingVertical: padding * 2
    },

    wrapper: {
        borderRadius: padding,
        alignItems: "center",
        justifyContent: "center", width: "100%",
        shadowColor: '#232138',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        borderColor: '#ddd',
        paddingVertical: padding * 3.5, backgroundColor: "#F4F2EF",
    },

    muscle: {
        fontSize: fontSize.regular + 1,
        fontFamily: fontFamily.medium,
        color: "#232138"
    },

    img: {height: 50, width: 50, marginBottom: padding / 2},

    row: {
        marginHorizontal: -5
    },

    col: {
        paddingHorizontal: 5,
    },

    col_half: {
        width: "50%"
    }
});


export default styles;