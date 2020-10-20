import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const style = StyleSheet.create({
  root: {
  },
});


const SingInForm = () => {

  const handleChange = (name:string) => (value:string) =>{
    console.log({name, value})
  };

  return (
    <View style={style.root}>
      <TextInput
        placeholder="Email"
        style={style.input}
        onChangeText={handleChange('email')}
      />
       <TextInput
        type="password"
        placeholder="Senha"
        style={style.input}
        onChangeText={handleChange('password')}
      />
{/*       <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={style.input}
        value={password}
        onChangeText={(value) => setPassword(value)}
      /> */}
    </View>
  );
};

export default SingInForm;
