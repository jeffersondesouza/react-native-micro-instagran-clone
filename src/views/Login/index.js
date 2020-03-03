import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import style from "./style";

const Login = () => {
  return (
    <View style={style.login}>
      <View style={style.inputGroup}>
        <TextInput placeholder="Usuário" style={style.input} />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={style.input}
        />
      </View>
      <Button title="Entrar" />
    </View>
  );
};

export default Login;
