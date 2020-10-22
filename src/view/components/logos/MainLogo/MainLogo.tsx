import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { TextInput, Button, Switch } from "react-native-paper";

const logo = require("../../../../../res/img/logo.png");
const logoSmall = require("../../../../../res/img/logoSmall.png");

const style = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  logo: {
    width: 250,
    height: 40,
  },
  logoSmall: {
    width: 100,
    height: 79,
    marginBottom: 10,
  },
});

const MainLogo = () => {
  return (
    <View style={style.root}>
      <Image style={style.logoSmall} source={logoSmall} />
      <Image style={style.logo} source={logo} />
    </View>
  );
};

export default MainLogo;
