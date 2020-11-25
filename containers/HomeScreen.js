import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View, ScrollView, SafeAreaView, FlatList } from "react-native";
import utils from "../assets/style";
import axios from "axios";
import Room from "../components/Room";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://express-airbnb-api.herokuapp.com/rooms"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? null : (
    <ScrollView contentContainerStyle={utils.section}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            <Room
              photo={item.photos[0].url}
              price={item.price}
              ratingValue={item.ratingValue}
              reviews={item.reviews}
              title={item.title}
              avatar={item.user.account.photo.url}
            />;
          }}
        />
      </View>
    </ScrollView>
  );
}
