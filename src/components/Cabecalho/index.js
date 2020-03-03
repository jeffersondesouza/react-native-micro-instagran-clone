import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

import style from "./style";

const Cabecalho = ({ userName, userURL, url }) => (
  <View style={style.cabecalho}>
    <Image style={style.image} source={{ uri: userURL }} />
    <Text>{userName}</Text>
  </View>
);

export default Cabecalho;
