import React, { useState, useCallback,useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import { Container, Header, Icon, Item, Input, Text } from "native-base";


import ProductList from "./ProductList";


import { COLORS, SIZES,appConstants,images } from "../../Constants";

import { useFocusEffect } from '@react-navigation/native'


const SubCategoryProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [subCategoryID, setSubCategoryID] = useState(props.route.params.item);
  const [loading, setLoading] = useState(true)

  useFocusEffect((
    useCallback(
      () => {
        console.log(`${appConstants.ClientUrL}selectedProduct`)
        // Products
        fetch(appConstants.ClientUrL+"selectedProduct", {
          method: 'POST', 
          mode: "no-cors", 
  
          headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({
              "Product_subcategory_id" : subCategoryID
          })
      })
      .then(res=>res.json())
      .then(resData => {
          console.log(resData)
          if(resData.error){
              console.log("hi")
              console.log(resData.error)
          }
          console.log("res.data.ProductList")
          console.log(resData.ProductList)
          console.log("res.data.ProductList")
          console.log(resData['code'] == 200)
          if(resData['code'] == 200)
          {
            console.log("hi")
            console.log("hi")
            console.log(resData.ProductList)
            console.log("hi")
            setProducts(resData.ProductList);
            setLoading(false);

          }
          
      }) .catch((err) => {
          
         
      });

      
    
       
          return () => {
            setProducts([]);
            setLoading();
          };
        },
        [],
      )
    ))
   
  

  


  if(loading){
    return(
      <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </Container>
      );
}
  return (
    <>
    
 <Container>


   

   <ScrollView>
     <View>
       <View>
        
       </View>
     
       {products.length > 0 ? (
       <View style={styles.listContainer}>
           {products.map((item) => {
               return(
                   <ProductList
                       navigation={props.navigation}
                       key={item.Product_id}
                       item={item}
                   />
               )
           })}
       </View>
       ) : (
           <View style={[styles.center, { height: SIZES.height / 2}]}>
               <Text>No products found</Text>
           </View>
       )}


       
      
     </View>
   </ScrollView>
 
</Container>
    
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
    
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
    paddingBottom:50
  },
  center: {
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default SubCategoryProductList;
