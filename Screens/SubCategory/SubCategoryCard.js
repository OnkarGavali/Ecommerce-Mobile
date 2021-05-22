import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native'

import { COLORS, SIZES, FONTS, ErrorToaststyle, SuccessToaststyle, InfoToaststyle,appConstants,images } from "../../Constants";


var { width } = Dimensions.get("window");

const SubCategoryCard = (props) => {
    const { Subcategory_name, Subcategory_description, Subcategory_image_url} = props;

    return (
        <View style={styles.container}>
            
            <Image 
            style={styles.image}
            resizeMode="contain"
            source={{uri: Subcategory_image_url ? 
                'http://192.168.0.11:8000/storage/files/One%20Pc-606f294feb43a-.jpg' :  
                'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
            />
            <View style={styles.card}/>
            <Text style={styles.title}>
                {Subcategory_name.length > 15 ? Subcategory_name.substring(0, 15 - 3)
                    + '...' : Subcategory_name
                }
            </Text>
            <Text style={styles.description}>
            {Subcategory_description.length > 25 ? Subcategory_description.substring(0, 15 - 3)
                    + '...' : Subcategory_description
                }</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    },
    description: {
        fontSize: 14,
        color: 'orange',
        marginTop: 10,
        textAlign:'center'
    },
    sliderImage: {
      height:SIZES.height/3-50,
      width: SIZES.height/3-50,
      alignSelf: 'center',
      borderRadius: 8,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
})

export default SubCategoryCard;