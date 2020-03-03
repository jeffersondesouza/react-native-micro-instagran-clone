import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import style from "./style";
import login from "../../api/login";

const Login = () => {
  const [userName, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [messagemErro, setMessagemErro] = useState("");

  const handleLogin = async data => {
    if (!userName || !password) {
      return;
    }

    try {
      await login({ userName, password });
      setMessagemErro("");
    } catch (error) {
      setMessagemErro(error.message);
    }
  };

  return (
    <View style={style.login}>
      <View style={style.inputGroup}>
        <TextInput
          placeholder="Usuário"
          style={style.input}
          onChangeText={value => setUser(value)}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={style.input}
          onChangeText={value => setPassword(value)}
        />
        <Text style={style.errorMessage}>{messagemErro}</Text>
      </View>
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default Login;
