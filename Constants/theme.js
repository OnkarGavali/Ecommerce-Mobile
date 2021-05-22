import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#E73A3A",
    secondary: "#FFFFFF", 
    secondaryLightgray:"#A6A7A7",
    TextColor: "#000000",
    
    green: "#66D59A",
    lightGreen: "#E6FEF0",

    lime: "#00BA63",
    emerald: "#2BC978",

    red: "#FF4134",
    lightRed: "#FFF1F0",

    purple: "#6B3CE9",
    lightpurple: "#F3EFFF",

    yellow: "#FFC664",
    lightyellow: "#FFF9EC",

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#FCFBFC",
    gray: "#C1C3C5",
    darkgray: "#C3C6C7",

    blue:"#3232ff",

    transparent: "transparent",


    BootsrapPrimary :"#1266F1",
    BootsrapSecondary: "#B23CFD",
    Success :"#00B74A",
    Danger :"#E73A3A",
    Warning:"#FFA900",
    Info :"#39C0ED",
    Light :"#FBFBFB",
    Dark :"#262626",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    
    
    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,


    // custom sizes

    logoSize:width/15,
    IconSize:width/15,
    ScrrenTopMargin:width/20,
    ScreenBottomMargin:90,
    BorderRadius:20,
    Textboxheight:width/8,
    BorderWidth:2,
    ButtonWidth:width/2,


};

export const FONTS = {
    largeTitle: {  fontSize: SIZES.largeTitle, lineHeight: 55, color:COLORS.TextColor },
    h1: {  fontSize: SIZES.h1, lineHeight: 36, color:COLORS.TextColor },
    h2: {  fontSize: SIZES.h2, lineHeight: 30, color:COLORS.TextColor },
    h3: {  fontSize: SIZES.h3, lineHeight: 22, color:COLORS.TextColor },
    h4: {  fontSize: SIZES.h4, lineHeight: 22, color:COLORS.TextColor },
    body1: {   fontSize: SIZES.body1, lineHeight: 36, color:COLORS.TextColor },
    body2: {   fontSize: SIZES.body2, lineHeight: 30, color:COLORS.TextColor },
    body3: {   fontSize: SIZES.body3, lineHeight: 22, color:COLORS.TextColor },
    body4: {   fontSize: SIZES.body4, lineHeight: 22 , color:COLORS.TextColor},
    body5: {   fontSize: SIZES.body5, lineHeight: 22, color:COLORS.TextColor },
};

export const ErrorToaststyle={
    backgroundColor: COLORS.Danger,
    width: SIZES.width/10*9,
    height: Platform.OS === ("ios") ? 80 : 140,
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 2,
    lines: 4,
    borderRadius: 15,
    fontWeight: "bold",
    yOffset: 40
};

export const SuccessToaststyle={
    backgroundColor: COLORS.Success,
    width: SIZES.width/10*9,
    height: Platform.OS === ("ios") ? 80 : 140,
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 2,
    lines: 4,
    borderRadius: 15,
    fontWeight: "bold",
    yOffset: 40
};

export const InfoToaststyle={
    backgroundColor: COLORS.Info,
    width: SIZES.width/10*9,
    height: Platform.OS === ("ios") ? 80 : 140,
    color: COLORS.white,
    fontSize: 15,
    lineHeight: 2,
    lines: 4,
    borderRadius: 15,
    fontWeight: "bold",
    yOffset: 40
};

const appTheme = { COLORS, SIZES, FONTS, ErrorToaststyle, SuccessToaststyle, InfoToaststyle};

export default appTheme;