import React, { Component } from 'react';
import {  View,StyleSheet,Image } from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from "../Constants";

export default class Logoheader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={images.logoOnly}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        marginVertical:SIZES.ScrrenTopMargin
    }
})