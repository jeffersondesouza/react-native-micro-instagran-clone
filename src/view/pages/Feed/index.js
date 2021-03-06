import React, { Fragment, useState, useEffect } from "react";
import { View } from "react-native";
import { ScrollView, FlatList, Text, Platform, StatusBar } from "react-native";
import { Cabecalho, Foto } from "../../components";

const Feed = () => {
  const [fotos, setFotos] = useState([]);
  const [marginTop] = useState(Platform.OS === "ios" ? 30 : 0);

  useEffect(() => {
    const loadFotos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const fotosData = await res.json();
      setFotos(fotosData);
    };

    loadFotos();
  }, []);

  return (
    <ScrollView style={{ marginTop }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {fotos.length ? (
        <FlatList
          data={fotos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <>
              <Cabecalho {...item} />
              {/* <Foto {...item} /> */}
            </>
          )}
        />
      ) : (
        <Text>Loading</Text>
      )}
    </ScrollView>
  );
};

export default Feed;
