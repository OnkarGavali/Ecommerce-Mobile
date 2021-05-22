import React from "react"
import { StyleSheet, Image, SafeAreaView, View,TouchableOpacity } from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../Constants";

const MyHeader = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Image
                source={images.fulllogo}
                resizeMode="contain"
                style={{ height: 50 }}
            />
            <TouchableOpacity>
            <Image
                            source={icons.cart}
                            resizeMode="contain"
                            style={{
                                width: 10,
                                height: 10,

                                
                            }}
            />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 3
    }
})

export default MyHeader;