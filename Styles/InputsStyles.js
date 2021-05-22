import {StyleSheet} from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from "../Constants"

const InputsStyles = StyleSheet.create({
    container: {
        width: '80%',
        height: SIZES.Textboxheight,
        borderRadius: SIZES.BorderRadius,
        borderColor: COLORS.primary, 
        marginVertical: 10,
        borderWidth: SIZES.BorderWidth, 
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    inputText: {
        fontFamily: 'DM Sans',
        color: COLORS.TextColor,
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default InputsStyles;
