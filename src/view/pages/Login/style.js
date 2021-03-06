import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  login: {
    backgroundColor: "#f1f1f1",
    height: "100%",
    justifyContent: "center",
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  inputGroup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#f8f8f8",
    marginBottom: 20,
    paddingLeft: 10,
    textAlign: "center",
    fontSize: 20
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginTop: 10
  },
  forgetPassword: {
    textAlign: 'center',
    marginTop: 20,
    color: 'blue',
  },
  forgetPasswordText: {
    color: 'blue',
    textAlign: 'center',

  },

});

export default style;
