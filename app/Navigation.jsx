import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home/Home";
import Search from "./screens/Search/Search";
import Local from "./screens/Local/Local";
import Products from "./screens/Products/Products";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigaton() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../assets/home.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../assets/search.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Local"
          component={Local}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../assets/local.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}
