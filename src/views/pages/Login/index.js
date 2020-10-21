import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import style from "./style";
import login from "../../api/login";
import { TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  const [userName, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [messagemErro, setMessagemErro] = useState("");


  const handleLogin = async data => {
    if (!userName || !password) {
      return;
    }

    try {
      const token = await login({ userName, password });
      await AsyncStorage.setItem("intluta_token", token);
      setMessagemErro("");
      navigation.replace("Feed", { name: userName });
    } catch (error) {
      setMessagemErro(error.message);
    }
  };

  const handleGoToRegister = ()=>{
    navigation.replace("Register", { name: userName });
  }

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
      <TouchableOpacity style={style.forgetPassword} onPress={handleGoToRegister}>
        <Text style={style.forgetPasswordText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

console.log("navigation:", Login.navigationOptions);
export default Login;
