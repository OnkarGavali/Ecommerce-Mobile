import {StyleSheet} from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from "../Constants"
const ColorFont = StyleSheet.create({
    heading: {
        marginTop: 10, 
        fontFamily: "DM Sans", 
        color: "#FFF", 
        fontSize: 28, 
        }, 
        subheading: {
            marginTop: 10, 
            color: "#FFF", 
            fontSize: 18, 
        }, 
        Paragraph: {
          
            color: "#000", 
            fontSize: 20, 
            marginTop: 12,
            padding: 8, 
            fontStyle: 'italic', 
            textAlign: 'center', 
            justifyContent: "space-around"
        }, 
        SubParagraph:{
            fontWeight: "bold", fontSize: 12, marginTop: 3, 
          
            color: "#000", 
            marginTop: 12,
            padding: 8, 
            fontStyle: 'italic', 
            textAlign: 'center', 
            justifyContent: "space-around"
        }, 
        LogoImage: {
            marginTop: 15, 
            
            
          },
    });

export default ColorFont;
