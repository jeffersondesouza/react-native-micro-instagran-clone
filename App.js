/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { Provider as PaperProvider  } from "react-native-paper";
import { Feed, Login, Register } from "./src/views";
import theme from "./src/styles/theme";
import SingIn from "./src/views/SingIn";

const Stack = createStackNavigator();

const FeedHeader = (props) => {
  return <Text>Omn Locker</Text>;
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SingIn"
            component={SingIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Feed"
            component={Feed}
            options={({ route }) => ({
              headerTitle: () => <FeedHeader {...route} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
