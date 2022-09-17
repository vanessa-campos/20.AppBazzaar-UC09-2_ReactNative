import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Navigators/StackNavigator";

export default function App({navigation}){

  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

  )

}