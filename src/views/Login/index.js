import React, { useState } from "react";
import { View, Text, TextInput, Button, Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import style from "./style";
import login from "../../api/login";

const Login = ({ navigation }) => {
  const [userName, setUser] = useState("Alura");
  const [password, setPassword] = useState("123456");
  const [messagemErro, setMessagemErro] = useState("");

  const handleLogin = async data => {
    if (!userName || !password) {
      return;
    }

    try {
      const token = await login({ userName, password });
      await AsyncStorage.setItem("intluta_token", token);
      setMessagemErro("");
      navigation.push("Feed");
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
          value={userName}
          onChangeText={value => setUser(value)}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={style.input}
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Text style={style.errorMessage}>{messagemErro}</Text>
      </View>
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

Login.navigationOptions = () => {
  const options = {
    title: "Logins"
  };

  if (Platform.OS === "android") {
    options.header = null;
  }

  return options;
};

export default Login;
