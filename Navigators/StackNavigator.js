import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import Destaque from './Screens/Destaque'
import Home from "./Screens/Home"
import SobreLoja from './Screens/SobreLoja'
import Colecoes from './Screens/Colecoes'
import Novidades from './Screens/Novidades'

const Stack = createStackNavigator();

export default function StackNavigator(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="Destaque" component={Destaque} options={{headerShown: false}}/>           
            <Stack.Screen name="Novidades" component={Novidades} options={{headerShown: false}}/>   
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} /> 
            <Stack.Screen name="SobreLoja" component={SobreLoja} options={{headerShown: false}}/>           
            <Stack.Screen name="Colecoes" component={Colecoes} options={{headerShown: false}}/>   
        </Stack.Navigator>
    )
}