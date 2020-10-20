import React from "react";
import { StyleSheet, View } from "react-native";


const style = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor:'red',
  },
});


const FullPageScream = ({ children }) => {
  return <View style={style.root}>{children}</View>;
};

export default FullPageScream;
