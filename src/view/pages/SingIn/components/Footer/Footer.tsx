import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput, Switch } from "react-native-paper";

const style = StyleSheet.create({
  root: {
    alignItems: 'center'
  },
  cta: {
    flexDirection: 'row',
  },
  ctaLink: {
    marginLeft: 5,
    color: "#18c64e",
  },
  link: {
    color: "blue",
  },
  text: {
    color: "#686868",
  },
  separator: {
    color: "#686868",
    marginBottom: 10,
    marginTop: 10,
  },
});

const Footer = () => {
  return (
    <View style={style.root}>
      <View style={style.cta}>
        <Text style={style.text}>Novo aqui?</Text>
        <TouchableOpacity>
          <Text style={style.ctaLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.separator}>ou</Text>
      <View >
        <TouchableOpacity>
          <Text style={style.link}>Acesse sem cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
