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

var { width } = Dimensions.get("window");

const ProductCard = (props) => {
    const { Product_name, Product_prize, Product_image_url1,
        Product_image_url2,Product_image_url3, Product_image_url4,
         Product_image_url5 } = props;

    return (
        <View style={styles.container}>
            
            <Image 
            style={styles.image}
            resizeMode="contain"
            source={{uri: Product_image_url1 ? 
                appConstants.ImageUrl+ Product_image_url1 :  
                'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
            />
            <View style={styles.card}/>
            <Text style={styles.title}>
                {Product_name.length > 15 ? Product_name.substring(0, 15 - 3)
                    + '...' : Product_name
                }
            </Text>
            <Text style={styles.price}>₹ {Product_prize}</Text>

            
              
           
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
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
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
//pathvaych asel tr as karaych
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => 
            dispatch(actions.addToCart({quantity: 1, product}))
    }
}

export default connect(null, mapDispatchToProps)(ProductCard);