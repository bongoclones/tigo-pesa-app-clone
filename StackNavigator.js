import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SelfCareScreen from "./screens/SelfCareScreen";
import SendMoneyScreen from "./screens/SendMoneyScreen";
import CheckBalance from "./components/CheckBalance";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "./constants/colors";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 90, backgroundColor: colors.blueColor },
        tabBarLabelStyle: {
          color: "white",
          fontSize: 18,
          fontWeight: "700",
          marginTop: 3,
        },
        tabBarIconStyle: { marginTop: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={50} color={colors.yellowColor} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={50}
                color="white"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Selfcare"
        component={SelfCareScreen}
        options={{
          tabBarLabel: "Self Care",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo
                name="squared-plus"
                size={50}
                color={colors.yellowColor}
              />
            ) : (
              <FontAwesome name="plus-square-o" size={50} color="white" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelfCare"
          component={SelfCareScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Send"
          component={SendMoneyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="CheckBalance"
            component={CheckBalance}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
