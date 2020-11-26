import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import utils from "../assets/style";
import axios from "axios";
import Room from "../components/Room";
import MapView from "react-native-maps";

export default function RoomScreen({ route }) {
  const id = route.params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://express-airbnb-api.herokuapp.com/rooms/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator size="large" color="red" />
  ) : (
    <ScrollView>
      <Room
        photo={data.photos[0].url}
        price={data.price}
        ratingValue={data.ratingValue}
        reviews={data.reviews}
        title={data.title}
        avatar={data.user.account.photo.url}
      />
      <MapView
        initialRegion={{
          latitude: 48.856614,
          longitude: 2.3522219,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        <Marker
          coordinate={{
            latitude: 48.8564449,
            longitude: 2.4002913,
            title: "title",
          }}
        />
      </MapView>
    </ScrollView>
  );
}
