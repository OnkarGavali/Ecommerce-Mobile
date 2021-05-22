import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native'
import { Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';
import { COLORS,appConstants } from "../../Constants";

var { width } = Dimensions.get("window")

const SearchedProduct = (props) => {
    const { productsFiltered } = props;
    return(
        <Content style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                        onPress={() => {
                            props.navigation.navigate("Product Detail", {item: item})
                        }}
                        key={item.Product_id}
                        avatar
                    >
                        <Left>
                            <Thumbnail 
                                source={{uri: item.Product_image_url1 ? 
                                appConstants.ImageUrl+ item.Product_image_url1 :  
                                'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
                            />
                        </Left>
                        <Body>
                            <Text>
                            
                            {item.Product_name.length > 10 ? item.Product_name.substring(0, 15 - 3)
                    + '...' : item.Product_name
                }
                            </Text>
                            
                        </Body>
                    </ListItem>
                ))
            ) : (
                <View style={styles.center}>
                    <Text style={{ alignSelf:  'center' }}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    }
})

export default SearchedProduct;