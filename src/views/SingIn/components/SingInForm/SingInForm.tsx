import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const style = StyleSheet.create({
  root: {},
  input: {
    marginBottom: 25,
  }
});

const SingInForm = () => {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const handleChange = (name: string) => (value: string) => {
    console.log({ name, value });
    setFormValue((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleLogin =()=>{
    console.log(formValue)
  }

  return (
    <View style={style.root}>
      <TextInput
        mode="outlined"
        label="Email"
        style={style.input}
        value={formValue.email}
        onChangeText={handleChange("email")}
      />
      <TextInput
        secureTextEntry
        mode="outlined"
        label="Senha"
        style={style.input}
        value={formValue.password}
        onChangeText={handleChange("password")}
      />
      <Button mode="contained" onPress={handleLogin}>Entrar</Button>
    </View>
  );
};

export default SingInForm;
