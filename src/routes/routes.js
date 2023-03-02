import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import BottomTabs from "../screens/tabs";
import MessageDetails from "../screens/MessageDetails";

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="MessageDetails" component={MessageDetails} options={{headerShown:true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();
export default Routes;