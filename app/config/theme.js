import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';

const color = {
    black: '#1E1611',
    light_black: '#414141',
    main: '#232138',
    secondary: '#F18365',
    white: '#ffffff',
    light_grey: '#eaeaea',
    grey: '#ccc',
    red: 'red',
    underlayColor: '#ddd'
}

const fontSize = {
    small: normalize(12),
    regular: normalize(14),
    large: normalize(21),
    extralarge: normalize(28)
}


const helvetica = {
    bold: "HelveticaNeue-Bold",
    medium: "HelveticaNeue-Medium",
    regular: "Helvetica Neue",
    light: "HelveticaNeue-Light"
}

const fontFamily = helvetica;


const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "#fff" : "#fff";

const tabIconStyle = { size: 19, color: tabColor, selected: color.secondary}
const navTitleStyle = { fontSize: fontSize.regular + 1 , fontFamily: fontFamily.medium, color: color.white, letterSpacing: 0.4 }
const navigationBarStyle = { backgroundColor: color.main, borderBottomWidth:0 }

export {
    color,
    fontSize,
    fontFamily,
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
    tabIconStyle,
    navTitleStyle,
    navigationBarStyle
}