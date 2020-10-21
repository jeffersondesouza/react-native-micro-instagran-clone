import React from "react";
import { Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
  root: {
    fontSize: 50,
    textAlign: 'center',
  },
 
});

const MainLogo = () => {
  return <Text style={style.root}>Omin Locker</Text>;
};

export default MainLogo;
