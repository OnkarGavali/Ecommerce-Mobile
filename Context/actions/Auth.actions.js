import jwt_decode from "jwt-decode"
import AsyncStorage from "@react-native-community/async-storage"
import {appConstants } from "../../Constants";


export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user, dispatch)=>{
    console.log(appConstants.ClientUrL+"loginapi")
    fetch(appConstants.ClientUrL+"loginapi", {
        method: 'POST', 
        mode: "no-cors", 

        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            "email" : user.email ,
            "password" : user.password, 
            "device_name": "react-app", 
        })
    })
    .then(res=>res.json())
    .then(resData => {
        console.log(resData)
        if(resData.error){
            console.log("hi")
            console.log(resData.error)
           
        }
        if(resData['code'] == 200)
        {
           console.log("login Sucessfull1")
           const token = resData['token'];
           console.log("token")
           console.log(token)
           console.log("token")
           AsyncStorage.setItem("jwt",token)
           
           
           dispatch(setCurrentUser(token, user))
           console.log("login Sucessfull2")
        }
        else{
            logoutUser(dispatch)
        }
    }) .catch((err) => {
        
        logoutUser(dispatch)
    });
}

export const getUserProfile = () => {
    fetch(`${appConstants.ClientUrL}users`, {
        method: "GET",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export const logoutUser = (dispatch) => {
    AsyncStorage.removeItem("jwt");
    dispatch(setCurrentUser({}))
}

export const  isLoggedIn  = (dispatch) => {
    console.log("hi**************************hi");
    
    AsyncStorage.getItem("jwt")
            .then((res) => 
            {
                console.log("res");
                console.log(res);
                console.log("res");
                if(res === false || res === null || res == false || res == null){
                    console.log("in if");  
                   
                    logoutUser(dispatch)
                    return
                }
                console.log("after  if");
                const user = {
                    email: "",
                    password: "",
                    device_name:"react"
                };

                dispatch(setCurrentUser(res, user))
            })
            .catch((error) => console.log(error))
    
}

export const setCurrentUser = (token, user) => {
    return {
        type: SET_CURRENT_USER,
        payload: token,
        userProfile: user
    }
}