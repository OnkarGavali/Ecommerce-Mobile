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

import { connect } from 'react-redux'
import * as actions from '../../Redux/Actions/cartActions';
import Swiper from 'react-native-swiper';
var { width } = Dimensions.get("window");

const CategoryCard = (props) => {
    const { Category_name, Category_description, Category_image_url} = props;

    return (
        <View style={styles.container}>
            
            <Image 
            style={styles.image}
            resizeMode="contain"
            source={{uri: Category_image_url ? 
                appConstants.ImageUrl+ Category_image_url :  
                'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
            />
            <View style={styles.card}/>
            <Text style={styles.title}>
                {Category_name.length > 15 ? Category_name.substring(0, 15 - 3)
                    + '...' : Category_name
                }
            </Text>
            <Text style={styles.description}>
            {Category_description.length > 25 ? Category_description.substring(0, 15 - 3)
                    + '...' : Category_description
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

export default CategoryCard;