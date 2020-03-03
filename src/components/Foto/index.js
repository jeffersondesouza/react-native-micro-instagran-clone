import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput
} from "react-native";

import style from "./style";
import Like from "./Like";
import Comment from "./Comment";

const Foto = ({ description, comentarios, userURL, url, likes }) => {
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(likes);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(comentarios);

  useEffect(() => {
    setLiked(likes > 0);
  }, [likes]);

  const handleLike = () => {
    setLiked(true);
    setLikedCount(likes + 1);
  };

  const handleChangeComment = text => setCommentText(text);

  const handleSendComment = () => {
    if (!commentText) {
      return;
    }

    const comment = {
      date: Date.now(),
      text: commentText,
      userName: "joao"
    };

    setCommentText("");
    setComments([...comments, comment]);  

  };

  return (
    <View>
      <Image style={style.image} source={{ uri: userURL }} />
      <Text>{description}</Text>
      <Like liked={liked} onLikeImage={handleLike} />
      <Text>{likedCount}</Text>
      <FlatList
        data={comments}
        keyExtractor={item => item.userName}
        renderItem={({ item }) => (
          <Comment userName={item.userName} text={item.text} date={item.date} />
        )}
      />
      <View style={style.commentInputField}>
        <TextInput
          multiline={true}
          value={commentText}
          onChangeText={handleChangeComment}
          style={style.commentInput}
          placeholder="Deixe seu comentário"
        />
        <TouchableOpacity onPress={handleSendComment}>
          <Image
            style={style.commentSend}
            source={require("../../../res/img/send.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Foto;
