import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingStart from "../screens/loadingStart";
import Home from "../screens/home";
import Register from "../screens/register";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="LoadingStart"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoadingStart" component={LoadingStart} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
