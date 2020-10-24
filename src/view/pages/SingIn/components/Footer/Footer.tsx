import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput, Switch } from "react-native-paper";

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20
  },
  ctaLink: {
    marginLeft: 5,
    textAlign: 'center',
    color: "#18c64e",
  },
  noRegisterLink: {
    color: "blue",
    textAlign: 'center',
  },
  text: {
    color: "#686868",
  },
  separatorBlock: {
    alignItems: 'center',
    flexGrow: 1,
  },
  registerBlock: {
    alignItems: 'center',
    width: 100
  },
  noRegisterBlock: {
    alignItems: 'center',
    textAlign: 'right',
    width: 100
  },
  separator: {
    color: "#686868",
    marginBottom: 10,
    marginTop: 10,
    textTransform:'uppercase',
    fontSize: 16,
  },
});

const Footer = () => {
  return (
    <View style={style.root}>
      <View style={style.registerBlock}>
        <TouchableOpacity>
          <Text style={style.ctaLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <View style={style.separatorBlock}>
        <Text style={style.separator}>ou</Text>
      </View>
      <View style={style.noRegisterBlock}>
        <TouchableOpacity>
          <Text style={style.noRegisterLink}>Acesse sem cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

/* 
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
     */