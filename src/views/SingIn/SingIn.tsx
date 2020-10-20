import React from "react";
import { Text, StyleSheet } from "react-native";
import { FullPageScream } from "../../components/layouts";
import { MainLogo } from "../../components/logos";
import SingInForm from "./components/SingInForm/SingInForm";

const style = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor:'red',
  },
});

const SingIn = () => {
  return (
    <FullPageScream>
      <MainLogo />
      <SingInForm />
    </FullPageScream>
  );
};

export default SingIn;
