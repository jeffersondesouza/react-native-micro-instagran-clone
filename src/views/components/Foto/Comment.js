import React from "react";
import { View, Text } from "react-native";

import style from "./style";

const Comment = ({ userName, text, date }) => {
  return (
    <View style={style.comment}>
      <View style={style.commentHeader}>
        <Text style={style.commentUserName}>{userName}</Text>
        <Text>{date}</Text>
      </View>
      <Text>{text}</Text>
    </View>
  );
};

export default Comment;
