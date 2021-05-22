import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import OrderConatiner from '../Screens/Order/OrderConatiner';
import OrderDetails from '../Screens/Order/OrderDetails';

const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="OrderList"
                component={OrderConatiner}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={{
                    headerShown: true
                }}
            />
        </Stack.Navigator>
    )
}

export default function OrderNavigator() {
    return <MyStack />
}