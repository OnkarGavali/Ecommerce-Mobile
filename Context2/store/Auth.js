import React, { useEffect, useReducer, userEffect, useState } from "react";

import AsyncStorage from "@react-native-community/async-storage";

import authReducer from "../reducers/Auth.reducer";
import { setCurrentUser } from "../actions/Auth.actions";
import AuthGlobal from "./AuthGlobal";

const Auth = (props) => {
  const [stateUser, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: {},
  });
  console.log("decoded");
  console.log("useeffect");
  const [showChild, setShowChild] = useState(false);


  useEffect(() => {
    setShowChild(true);
    console.log("decoded");
    console.log("useeffect");




    AsyncStorage.getItem("jwt")
    .then((res) => 
    {
        console.log("decoded");
        console.log(res);
        console.log("decoded");
        if(res === false || res === null || res == false || res == null){
            console.log("in if");  
           
            logoutUser(dispatch)
            
        }
        else{
        console.log("after  if");
        const user = {
            email: "",
            password: "",
            device_name:"react"
        };

        dispatch(setCurrentUser(res,uuser));
      }
    })
    .catch((error) => console.log(error))







   
  }, []);

  if (!showChild) {
    console.log("return null");
    console.log("return null");
    return null;
  } else {
    console.log("return full");
    console.log("return full");
    return (
      
      <AuthGlobal.Provider
        value={{
          stateUser,
          dispatch,
        }}
      >
        {props.children}
      </AuthGlobal.Provider>
    );
  }
};

export default Auth;
