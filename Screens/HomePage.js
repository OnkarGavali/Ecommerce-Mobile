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


import axios from 'axios';

import ProductList from "./Products/ProductList";
import CategoryList from './Category/CategoryList';
import SearchedProduct from "./Products/SearchedProducts";
import Banner from "../Components/Banner";
import { COLORS, SIZES,appConstants,images } from "../Constants";
import MyHeader from "../Components/MyHeader";
import { useFocusEffect } from '@react-navigation/native'


const HomePage = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [loading, setLoading] = useState(true)

  useFocusEffect((
    useCallback(
      () => {
        console.log(`${appConstants.ClientUrL}AllProducts`)
        // Products
        axios
          .get(`${appConstants.ClientUrL}AllProducts`)
          .then((res) => {
            console.log("hi")
            console.log(res)
            console.log("hi")
            console.log("hi+++++++++++++++++++++++++++++")
            console.log(res.data.AllProductList)
            console.log("hi")
            console.log("hi+++++++++++++++++++++++++++++")
            console.log("hi+++++++++++++++++++++++++++++")
            console.log(res.data.AllProductList)
            console.log("hi")
            setProducts(res.data.AllProductList);
            setProductsFiltered(res.data.AllProductList);
            setProductsCtg(res.data.AllProductList);
            setInitialState(res.data.AllProductList);
          
          })
          .catch((error) => {
            console.log('Api call error1',error)
          })
    
        // Categories
        axios
          .get(`${appConstants.ClientUrL}home`)
          .then((res) => {
            setCategories(res.data.CategoryList)
            setLoading(false)
          })
          .catch((error) => {
            console.log('Api call error2',error)
          })
    
          return () => {
            setProducts([]);
            setProductsFiltered([]);
            setFocus();
            setCategories([]);
            setActive();
            setInitialState();
          };
        },
        [],
      )
    ))
   
  

  // Product Methods
  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.Product_name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };


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
 <MyHeader/>
 <Header searchBar rounded>
   <Item>
     <Icon name="ios-search" />
     <Input
       placeholder="Search"
       onFocus={openList}
       onChangeText={(text) => searchProduct(text)}
     />
     {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
   </Item>
 </Header>
 {focus == true ? (
   <SearchedProduct 
   navigation={props.navigation}
   productsFiltered={productsFiltered} />
 ) : (
   <ScrollView>
     <View>
       <View>
         <Banner />
       </View>
     



       {categories.length > 0 ? (
       <View style={styles.listContainer}>
           {categories.map((item) => {
               return(
                   <CategoryList
                       navigation={props.navigation}
                       key={item.Category_id}
                       item={item}
                   />
               )
           })}
       </View>
       ) : (
           <View style={[styles.center, { height: SIZES.height / 2}]}>
               <Text>No categories found</Text>
           </View>
       )}






       {productsCtg.length > 0 ? (
       <View style={styles.listContainer}>
           {productsCtg.map((item) => {
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
 )}
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

export default HomePage;
