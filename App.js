import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,LogBox} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";
import Auth from "./Context/store/Auth";
LogBox.ignoreAllLogs(true);

// screen

import Navigation from './Navigation/Navigation';



export default function App() {
  return (
    
    <Provider store={store}>
        <NavigationContainer>
          
          <Navigation />
        </NavigationContainer>
    </Provider>
    
  );
}


