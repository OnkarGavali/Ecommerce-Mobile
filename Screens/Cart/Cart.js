import React, { useContext } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
import {
  Container,
  Text,
  Left,
  Right,
  H1
} from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from './CartItem';
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";
import axios from 'axios';
import { COLORS, SIZES, FONTS, ErrorToaststyle, SuccessToaststyle, InfoToaststyle,appConstants,images } from "../../Constants";
import {storeData, retrieveData} from '../../Functions';

var { height, width } = Dimensions.get("window");

const Cart = (props) => {

    var total = 0;
    props.cartItems.forEach(cart => {
        return (total += cart.product.Product_prize * cart.quantity)
    });

    const confirmOrder = () => {
   
      console.log("hi")
      
      
    
    retrieveData("userToken").then(token=> {
      if(token.code=="404"){
        props.navigation.replace("Login")

      }
     
     
          
      fetch(appConstants.ClientUrL+"PlaceOrder", {
        method: 'POST',
        mode: "no-cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer"+" "+token
        },
        body: JSON.stringify({
          "order": props.cartItems,
        })
    })
    .then((res) => {
        console.log("hi2")
        console.log(res)
          if (res.status == 200 || res.status == 201) {
              setTimeout(() => {
                  props.clearCart();
              }, 500)
          }
      })
      .catch((error) => {
        console.log('Api call error1',error)
  })
  })
      
  }

  return (
    <>
      {props.cartItems.length ? (
        <Container style={styles.fullContainer}>
          <H1 style={{ alignSelf: "center" }}>Cart</H1>
          <SwipeListView
            data={props.cartItems}
            renderItem={(data) => (
             <CartItem item={data} />
            )}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity 
                style={styles.hiddenButton}
                onPress={() => props.removeFromCart(data.item)}
                >
                  <Icon name="trash" color={"white"} size={30} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
          <View style={styles.bottomContainer}>
            <Left>
                <Text style={styles.price}>Total= ₹ {total}</Text>
            </Left>
            <Right>
            <Button
                        title={'Clear'}
                        color={'red'}
                        onPress={() => {
                        props.clearCart()
                    }}
            />
            </Right>
            <Right>
            <Button 
                        title={'Checkout'}
                        color={'green'}
                        onPress={confirmOrder}
            />
  
            </Right>
          </View>
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>Looks like your cart is empty</Text>
          <Text>Add products to your cart to get started</Text>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item))
    }
}

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'gainsboro',
  },
  fullContainer:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gainsboro",
  },
  bottomContainer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: 'white',
      elevation: 20,
      paddingBottom:60,
      paddingRight:5
  },
  price: {
      fontSize: 18,
      margin: 20,
      color: 'red'
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    margin:10,
    
  },
  hiddenButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
    height: 70,
    width: width / 1.2,
    elevation: 8,
    borderRadius: 10,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
