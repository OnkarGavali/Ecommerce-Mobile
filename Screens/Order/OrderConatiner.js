import React, { useContext,useState ,useEffect,useCallback} from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  ActivityIndicator
} from "react-native";
import {
  Container,
  Text,
  Left,
  Right,
  H1
} from "native-base";
import { useFocusEffect } from '@react-navigation/native'
import Icon from "react-native-vector-icons/FontAwesome";
import axios from 'axios';
import { COLORS, SIZES, FONTS, ErrorToaststyle, SuccessToaststyle, InfoToaststyle,appConstants,images } from "../../Constants";
import {storeData, retrieveData} from '../../Functions';

var { height, width } = Dimensions.get("window");
import { isLoggedIn } from "../../Context/actions/Auth.actions";
const OrderConatiner = (props) => {

  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true)

  useFocusEffect((
    useCallback(
      () => {
        retrieveData("userToken").then(token=> {
          if(token.code=="404"){
            props.navigation.replace("Login")

          }
          else{
              console.log("200")
              console.log(token)
              console.log("200")
              console.log('Bearer '+ token )
              axios
              .get(`${appConstants.ClientUrL}ClientAllOrders`, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer"+" "+token,
              },
                
            })
              .then((res) => {
                setOrders(res.data.OrderList);
                setLoading(false);
                console.log(res.data.OrderList)
              })
              .catch((error) => {
                console.log('Api call error1',error)
          })
          }
          
      })
        
    
       
    
        return () => {
            setOrders([]);
        }
      },
      [],
    )
  ))
      
  if(loading){
    return(
      <Container style={{ backgroundColor: "#f2f2f2",justifyContent: 'center',
      alignItems: 'center' }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </Container>
      );
}

  return (
    <ScrollView style={styles.container}>
      {orders.length > 0 ? (
        <Container>
          <H1 style={{ alignSelf: "center" }}>My Orders</H1>
          <View style={styles.listContainer}>
           {orders.map((item) => {
               return(
                <View  key={item.Order_id}>
                <TouchableOpacity style={styles.cardContainer}
                 onPress={() => 
                        props.navigation.navigate("OrderDetails", { itemid: item.Order_id})
                    }>
                <Left>
                <Left>
                <Text style={styles.orderid}>
                Order-id: {item.Order_id}
                </Text>
                
                    <Text style={styles.title}>
                        Quantity: {item.Order_product_quantity} 
                    </Text>
                    <Text style={styles.cost}>
                        Cost: {item.Order_total_cost} ₹ 
                    </Text>
                    </Left>
                </Left>
                <Right>
                <Text style={styles.title}>
                        
                        {(item.created_at).slice(0,10)}
                    </Text>
                </Right>
                <Right>
                {
                    item.Order_status==0 && 
                    <View style={{ backgroundColor:COLORS.Info,
                    padding: 5,
                    borderRadius:5}}>
                    <Text style={styles.orderText}>
                    Received
                    </Text> 
                    </View>
                }

                {
                    item.Order_status==1 && 
                    <View style={{ backgroundColor:COLORS.BootsrapPrimary,
                    padding: 5,
                    borderRadius:5}}>
                    <Text style={styles.orderText}>
                    Accepted
                    </Text> 
                    </View>
                }

                {
                    item.Order_status==2 && 
                    <View style={{ backgroundColor:COLORS.Success,
                    padding: 5,
                    borderRadius:5}}>
                    <Text style={styles.orderText}>
                    Delivered
                    </Text> 
                    </View>
                }
                {
                    item.Order_status==3 && 
                    <View style={{ backgroundColor:COLORS.Dark,
                    padding: 5,
                    borderRadius:5}}>
                    <Text style={styles.orderText}>
                    Rejected
                    </Text> 
                    </View>
                }
                
                </Right>
                
        
                </TouchableOpacity>
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
    height: width/5+10,
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
},
orderid:{
  fontWeight:"bold"
},
orderText:{
  color:COLORS.white
},
cost:{
  color:COLORS.primary,
  fontWeight:"bold"
}
});

export default OrderConatiner;
