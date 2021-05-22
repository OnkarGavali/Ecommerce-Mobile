import React, { useContext,useState ,useEffect,useCallback} from "react";
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

import SubCategoryList from "./SubCategoryList";
import { useFocusEffect } from '@react-navigation/native'


import { COLORS, SIZES, FONTS, ErrorToaststyle, SuccessToaststyle, InfoToaststyle,appConstants,images } from "../../Constants";
import {storeData, retrieveData} from '../../Functions';



const SubCategoryContainer = (props) => {
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryID, setSubCategoryID] = useState(props.route.params.item);
  const [loading, setLoading] = useState(true)

  useFocusEffect((
    useCallback(
      () => {
    let body = {
        "Subcategory_category_id": subCategoryID,
    }
    console.log(`${appConstants.ClientUrL}home/subcategory`)
    console.log(subCategoryID)
      axios
      .post(`${appConstants.ClientUrL}home/subcategory`, body)
          .then((res) => {
            console.log("hi")
            console.log(res)
            console.log("hi")
            console.log("hi+++++++++++++++++++++++++++++")
            console.log(res.data.SubcategoryList)
            console.log("hi")
            console.log("hi+++++++++++++++++++++++++++++")
            console.log("hi+++++++++++++++++++++++++++++")
            console.log(res.data.SubcategoryList)
            console.log("hi")
            setSubCategories(res.data.SubcategoryList);
           
            setLoading(false)
          })
          .catch((error) => {
            console.log('Api call error1',error)
          })
    
       
    
        return () => {
            setSubCategories([]);
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
    
    
 <Container style={styles.container}>
 <ScrollView >
 
 
     <View>
       
     
  
       {subCategories.length > 0 ? (
       <View style={styles.listContainer}>
           {subCategories.map((item) => {
               return(
                   <SubCategoryList
                       navigation={props.navigation}
                       key={item.Subcategory_id}
                       item={item}
                   />
               )
           })}
       </View>
       ) : (
           <View style={[styles.center, { height: SIZES.height / 2}]}>
               <Text>No subCategories found</Text>
           </View>
       )}
      
     </View>
  
     </ScrollView>
</Container>

    
  
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
    
  },
  listContainer: {
    
    flexDirection: "row",
  
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
    paddingBottom:50
  },
  center: {
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default SubCategoryContainer;
