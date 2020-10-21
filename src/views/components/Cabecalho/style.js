import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.1)',
    padding: 10
  },
  image: { borderRadius: 30, marginRight: 10, width: 50, height: 50 }
});

export default style;
