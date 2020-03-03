import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("screen").width;

const style = StyleSheet.create({
  image: { width: largura, height: largura },
  like: { margin: 5, width: 40, height: 40 },
  comment: { marginBottom: 10 },
  commentUserName: { fontWeight: "bold" },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2.5
  },
  commentInputField: {
    maxWidth: largura,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  commentInput: {
    flex: 1,
  },
  commentSend: {
    width: 30,
    height: 30
  }
});

export default style;
