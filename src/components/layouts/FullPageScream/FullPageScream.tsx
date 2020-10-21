import React from "react";
import { StyleSheet, View } from "react-native";


const style = StyleSheet.create({
  root: {
    height: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor:'white',
  },
});


const FullPageScream = ({ children }) => {
  return <View style={style.root}>{children}</View>;
};

export default FullPageScream;
