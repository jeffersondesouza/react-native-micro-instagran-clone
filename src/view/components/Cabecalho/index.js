import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

import style from "./style";

const Cabecalho = ({ userName, userURL, url, title }) => (
  <View style={style.cabecalho}>
    <Text>{title}</Text>
  </View>
);

export default Cabecalho;
