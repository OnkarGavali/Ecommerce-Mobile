import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { COLORS, SIZES, FONTS, ErrorToaststyle, SuccessToaststyle, InfoToaststyle,appConstants,images } from "../../Constants";


const CartItem = (props) => {
  const data = props.item.item.product;
  const quantity = props.item.item.quantity;
  return (
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
          source={{
            uri: data.Product_image_url1
              ? appConstants.ImageUrl+data.Product_image_url1
              : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text>{data.Product_name}</Text>
        </Left>
        <Right>
          <Text>₹ {data.Product_prize}* {quantity} = {data.Product_prize * quantity}</Text>
        </Right>
        
      </Body>
    </ListItem>
  );
};

const styles = StyleSheet.create({
    listItem: {
        flex:1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf:"center",
        margin:10,
        elevation: 8,
        borderRadius: 10,
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default CartItem;
