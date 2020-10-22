import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { FullPageScream } from "../../components/layouts";
import { MainLogo } from "../../components/logos";
import SingInForm from "./components/SingInForm/SingInForm";
import Footer from "./components/Footer/Footer";

const style = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor:'white',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'space-between'
  },
});

const SingIn = () => {
  return (
    <View style={style.root}>
      <MainLogo />
      <SingInForm />
      <Footer />
    </View>
  );
};

export default SingIn;
