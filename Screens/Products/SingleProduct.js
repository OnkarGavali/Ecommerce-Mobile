import React, { useState, useEffect } from 'react'
import { Image, View, StyleSheet, Text, ScrollView,TextInput, Button } from 'react-native';
import { Left, Right , Container, H1 } from 'native-base';
import { COLORS, SIZES, FONTS, ErrorToaststyle, SuccessToaststyle, InfoToaststyle,appConstants,images } from "../../Constants";
import Swiper from 'react-native-swiper';
import { emailValidator,passwordValidator } from "../../Validation/Validation";
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';

const SingleProduct = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [Quantity, setQuantity] = useState({ value: 1, error: '' })
    
    
    const ValidateQuantity = (text) =>{
        
        if (text<0) {
            setQuantity({ value:1, error: "" })
            return
        }
        else{
            setQuantity({ value:text, error: "" })
            return
        }
    }
    return (
        <Container style={styles.container}>
            <ScrollView style={{ marginBottom: 80, padding: 5 }}>
                <View style={styles.swiperContainer}>

            <Swiper
                    style={styles.swiper}
                    showButtons={true}
                    autoplay={false}
                    
                >
                {
                    item.Product_image_url1 &&
                    <Image 
                source={{
                    uri: item.Product_image_url1 ?  appConstants.ImageUrl+ item.Product_image_url1   
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }}
                    resizeMode="contain"
                    style={styles.image} 
                />
                }
                {
                    item.Product_image_url2 &&
                    <Image 
                source={{
                    uri: item.Product_image_url2 ?  appConstants.ImageUrl+ item.Product_image_url2   
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }}
                    resizeMode="contain"
                    style={styles.image} 
                />
                }
                {
                    item.Product_image_url3 &&
                    <Image 
                source={{
                    uri: item.Product_image_url3 ?  appConstants.ImageUrl+ item.Product_image_url3  
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }}
                    resizeMode="contain"
                    style={styles.image} 
                />
                }
                {
                    item.Product_image_url4 &&
                    <Image 
                source={{
                    uri: item.Product_image_url4 ?  appConstants.ImageUrl+ item.Product_image_url4  
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }}
                    resizeMode="contain"
                    style={styles.image} 
                />
                }
                {
                    item.Product_image_url5 &&
                    <Image 
                source={{
                    uri: item.Product_image_url5 ?  appConstants.ImageUrl+ item.Product_image_url5   
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }}
                    resizeMode="contain"
                    style={styles.image} 
                />
                }
                
                
            </Swiper>
                    
                </View>
                <View style={styles.contentContainer}>
                    <H1 style={styles.contentHeader}>{item.Product_name}</H1>
                    <Text style={styles.contentText}>{item.Product_dimension}</Text>
                    <Text style={styles.contentText}>{item.Product_color}</Text>
                </View>
                <View style={styles.availabilityContainer}>
                    
                    <Text>{item.Product_description}</Text>
                </View>
            </ScrollView>

            <View style={styles.bottomContainer}>
                <Left>
                    <Text style={styles.price}>₹ {item.Product_prize}</Text>
                </Left>
                <TextInput
                    style={styles.input}
                    placeholder={'Quantity'}
                    name={'name'}
                    secureTextEntry={false}
                    onChangeText={(text) => ValidateQuantity(text)}
                    keyboardType = 'numeric'
                    >
                </TextInput>
                <Right style={{marginRight:20}}>

                <Button
                        title={'ADD'}
                        color={'green'}
                        onPress={() => {
                        props.addToCartWithQuantity(item,Quantity.value)
                    }}
                />
                </Right>
                
            </View>
        </Container>
    )

}

const mapToDispatchToProps = (dispatch) => {
    
    return {
        addToCartWithQuantity: (product,Qty) => 
            dispatch(actions.addToCartWithQuantity({quantity: Qty, product}))
    
}
}

export default connect(null, mapToDispatchToProps)(SingleProduct);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: COLORS.backgroundColor
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'red'
    },
    availabilityContainer: {
        marginBottom: 20,
        alignItems: "center"
    },
    availability: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'green'
    },
    swiperContainer:{
        height:SIZES.height/2,
        width:"90%",
        borderWidth:10,
        borderColor:"red",
        alignSelf:"center"
    }
})

