import React, { useState,useContext,useEffect} from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Container, Header, Icon, Item, Input, Text } from "native-base";
import { COLORS, SIZES, FONTS, ErrorToaststyle, SuccessToaststyle, InfoToaststyle,appConstants,images } from "../../Constants";
import {storeData, retrieveData} from '../../Functions';
import { emailValidator,passwordValidator } from "../../Validation/Validation";

import axios from 'axios';


const login = (props) => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        retrieveData("userToken").then(token=> {
            if(token==0){
                console.log("400")
                console.log(token)
                console.log("400")
                setLoading(false)
            }
            else{
                console.log("200")
                console.log(token)
                console.log("200")
                props.navigation.replace("Home")
            }
        })
      }, [loading]);

   
      const ValidatePassword = (text) =>{
        
        const passwordError = passwordValidator(text)
    
        if (passwordError) {
            setPassword({ value:text, error: passwordError })
            return
        }
        else  {
            setPassword({ value:text, error: "" })
            return
        }
    }

    const ValidateEmail = (text) =>{
        const emailError = emailValidator(text)
        if (emailError) {
            setEmail({ value:text, error: emailError })
            return
        }
        else{
            setEmail({ value:text, error: "" })
            return
        }
    }

async function handleSubmit(){
   
    if (email.error) {
        return
    }
    



    try{
    
            fetch(appConstants.ClientUrL+"loginapi", {
               method: 'POST', 
               mode: "no-cors", 
    
               headers: {
                   'Accept': 'application/json', 
                   'Content-Type': 'application/json'
               }, 
    
               body: JSON.stringify({
                   "email" : email.value, 
                   "password" : password.value, 
                   "device_name": "react-app", 
               })
           }).then(res=>res.json()).then(resData => {
                console.log("hi")
                console.log(resData)
                
               if(resData.error){
                console.log("hi")
                console.log(resData.error)
                return
               }
               if(resData['code'] == 200)
               {
                storeData('userToken',resData['token']).then(resData2 => {
                        console.log(resData2)
                        console.log("sucess")
                        console.log(resData['token'])
                        props.navigation.replace("Home")
                    }
                    )
                    
                     
               }
                   
               })
              
               
           } 
        catch(error)
        {
            alert(error); 
        }
}

if(loading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size="large"/>
        </View>
      );
}
    return (
        <View style={styles.container}>
         <View style={styles.upperContainer}>
         <Text style={FONTS.h1}>Bell Sanitory</Text>
         </View>
         <View style={styles.cardcontainer}>
        
         
        
            <View style={{marginTop: 20}} />
            <TextInput
            style={styles.input}
            placeholder={'Email'}
            name={'name'}
            secureTextEntry={false}
            onChangeText={(text) => ValidateEmail(text)}
            errorStyle={{ color: COLORS.primary }}
            error={!email.error}
            errorMessage={email.error}
            >
            </TextInput>

            { email.error != "" ? (
             <Text style={styles.errorMessage}>
             {email.error}
             </Text>
            ) : null  }

            <TextInput
            style={styles.input}
            placeholder={'Password'}
            name={'name'}
            secureTextEntry={false}
            onChangeText={(text) => ValidatePassword(text)}
            errorStyle={{ color: COLORS.primary }}
            error={!password.error}
            errorMessage={password.error}
            >
            </TextInput>
            { password.error != "" ? (
             <Text style={styles.errorMessage}>
             {password.error}
             </Text>
            ) : null  }
            <TouchableOpacity onPress={() => handleSubmit()} style={styles.btn}>
                <Text style={styles.btntxt}>login</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.secondary, 
       
    },
    cardcontainer: {
    
        alignItems: 'center',
        backgroundColor: COLORS.secondary, 
        justifyContent: 'center', 
        width: SIZES.width - 50,
        height: SIZES.height/3+50,
        padding: 10,
        borderRadius: 10,
        elevation: 20,
        marginTop:-40,
        marginBottom:10
    },
    upperContainer:{
        alignItems: 'center',
        backgroundColor: COLORS.primary, 
        justifyContent: 'center', 
        width: SIZES.width,
        height: SIZES.height/2,
        padding: 10,
        borderBottomRightRadius:100,
        borderBottomStartRadius:1,
        color:COLORS.primary,
        elevation: 20,
        marginTop:-20,
    },
    
    textTitle: {
        fontSize: 35,
        padding: 8
    },
    textBody: {
        
        fontSize: 15, 
        padding: 8,
    }, 
    input: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: 'orange'
    },
    btn:{
        width: '40%',
        height: 40,
        backgroundColor: COLORS.primary,
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    btntxt:{
        color:COLORS.secondary, 
        textAlign:"center"
    },
    errorMessage:{
        color:COLORS.Danger, 
        fontSize:12,

    }
   
});
