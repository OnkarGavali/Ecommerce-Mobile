import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';

import Tabs from "./tabs";
import SingleProduct from "../Screens/Products/SingleProduct"
import SubCategoryContainer from '../Screens/SubCategory/SubCategoryContainer';
import Login from '../Screens/Authentication/Login';      
import SubCategoryProductList from "../Screens/Products/SubCategoryProductList";

const Stack = createStackNavigator();

const Navigation = () => {

    return (
        
        <Stack.Navigator>

            
            <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{headerShown: false}}
            />

            
            <Stack.Screen 
                    name="Home" 
                    component={Tabs} 
                    options={{headerShown: false}}
            />


            <Stack.Screen 
                    name='Product Detail'
                    component={SingleProduct}
                    options={{
                        headerShown: true,
                    }}
            />


            <Stack.Screen 
                    name='SubCategory'
                    component={SubCategoryContainer}
                    options={{
                        headerShown: true,
                    }}
            />
            <Stack.Screen 
                    name='SubCategoryProductList'
                    component={SubCategoryProductList}
                    options={{
                        headerShown: true,
                    }}
            />


        </Stack.Navigator>
       
    );

};

export default Navigation;
