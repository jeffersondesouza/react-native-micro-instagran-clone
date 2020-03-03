import React from "react";
import { Image, TouchableOpacity } from "react-native";
import style from "./style";

const likeImage = likes =>
  likes
    ? require("../../../res/img/s2-checked.png")
    : require("../../../res/img/s2.png");

const Like = ({ liked, onLikeImage }) => (
  <TouchableOpacity onPress={onLikeImage}>
    <Image style={style.like} source={likeImage(liked)} />
  </TouchableOpacity>
);

export default Like;
