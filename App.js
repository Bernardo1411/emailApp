import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EmailList from "./screens/EmailList";
import Email from "./screens/Email";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="EmailList"
          component={EmailList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{
            title: "Email",
            headerStyle: {
              backgroundColor: "#333652",
            },
            headerTintColor: "#E9EAEC",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#E9EAEC",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
