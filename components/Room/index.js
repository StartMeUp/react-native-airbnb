import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import utils from "../../assets/style";
import { FontAwesome } from "@expo/vector-icons";

const Room = ({ photo, price, ratingValue, reviews, title, avatar }) => {
  return (
    <View style={styles.roomCard}>
      <ImageBackground source={photo} style={styles.roomPhoto}>
        <Text style={roomPrice}>{price} €</Text>
      </ImageBackground>
      {/* https://reactnative.dev/docs/imagebackground */}
      <View style={styles.roomDetails}>
        <View style={style.roomInfo}>
          <Text style={styles.roomTitle}>{title}</Text>
          <View style={styles.roomReviews}>
            <View style={styles.stars}>
              <FontAwesome name="star" size={24} color="black" />
              <FontAwesome name="star" size={24} color="black" />
              <FontAwesome name="star" size={24} color="black" />
              <FontAwesome name="star" size={24} color="black" />
              <FontAwesome name="star-o" size={24} color="black" />
            </View>
            <Text>{reviews} reviews</Text>
          </View>
        </View>
        <Image source={avatar} style={styles.avatar} />
      </View>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  roomCard: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    paddingVertical: 12,
  },
  roomDetails: { flexDirection: "row" },
  roomInfo: {},
  roomPrice: {
    marginBottom: 12,
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: "black",
    color: "white",
  },
  roomTitle: { fontSize: 18 },
  roomReviews: {},
  roomPhoto: { justifyContent: "flex-end" },
  avatar: { height: 50, width: 50, borderRadius: 50 },
  stars: { flexDirection: "row" },
});
