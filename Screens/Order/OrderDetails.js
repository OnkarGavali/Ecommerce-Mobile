import React, { useContext,useState ,useEffect} from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView
} from "react-native";
import {
  Container,
  Text,
  Left,
  Right,
  H1,Thumbnail
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome";
import axios from 'axios';
import { COLORS, SIZES, FONTS, ErrorToaststyle, SuccessToaststyle, InfoToaststyle,appConstants,images } from "../../Constants";
import {storeData, retrieveData} from '../../Functions';

var { height, width } = Dimensions.get("window");

const OrderDetails = (props) => {

  const [orderID, setOrderID] = useState(props.route.params.itemid);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
       
    
    let body = {
        "OrderId": orderID,
    }
        axios
          .post(`${appConstants.ClientUrL}OrderDeatils`,body)
          .then((res) => {
            setOrders(res.data.OrderList);
            setLoading(false);
            console.log(res.data.OrderList)
          })
          .catch((error) => {
            console.log('Api call error1',error)
          })
    
       
    
        return () => {
            setOrders([]);
        }
      },[])
      
  

  return (
    <ScrollView style={styles.container}>
      {orders.length > 0 ? (
        <Container>
         
          <View style={styles.listContainer}>
           {orders.map((item) => {
               return(
                <View  key={item.Ordered_product_id}
                 style={styles.cardContainer}>
                <Left>
                    <Thumbnail
                    source={{
                        uri: item.Product_image_url1
                        ? appConstants.ImageUrl+item.Product_image_url1
                        : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                    }}
                    />
                </Left>
                <Left>
          <Text>{item.Product_name}</Text>
        </Left>
        <Right>
          <Text> {item.Ordered_product_cost}* {item.Ordered_product_quantity} = ₹{item.Ordered_product_total_cost}</Text>
        </Right>
        
              
               </View>
               )
           })}
       </View>
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>Looks like your Orders is empty</Text>
          <Text>Add products to your cart to get started</Text>
        </Container>
      )}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "gainsboro",
    
  },
  cardContainer: {
    flexDirection: 'row',
    width: width-25 ,
    height: width/5,
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf:'center',
    elevation: 8,
    backgroundColor: 'white'
},
Container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}
});

export default OrderDetails;
