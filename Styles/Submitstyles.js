import {StyleSheet} from 'react-native';
import { COLORS, SIZES, FONTS } from "../Constants";
const Submitstyles = StyleSheet.create({
    container : {
        backgroundColor: COLORS.primary, 
        width: SIZES.ButtonWidth, 
        height: SIZES.Textboxheight,
        borderRadius: SIZES.BorderRadius,
        alignItems: 'center',
        justifyContent: 'center', 
          
    }, 
    submitText: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color: 'white',    
    }
    }); 
    
export default Submitstyles; 