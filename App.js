/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Feed, Login } from "./src/views";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

const Stack = createStackNavigator();

const FeedHeader = props => {
  return <Text>Olá {props.params.name}</Text>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={({ route }) => ({
            headerTitle: () => <FeedHeader {...route} />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
