import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Room = ({ photo, price, ratingValue, reviews, title, avatar, id }) => {
  const displayStars = (ratingValue) => {
    const tab = [];
    for (let i = 1; i <= 5; i++) {
      tab.push(
        <FontAwesome
          name="star"
          size={24}
          color={ratingValue >= i ? "gold" : "grey"}
          key={i}
        />
      );
    }
    return tab;
  };
  return (
    <View style={styles.roomCard}>
      <ImageBackground source={{ uri: photo }} style={styles.roomPhoto}>
        <Text style={styles.roomPrice}>{price} €</Text>
      </ImageBackground>
      {/* https://reactnative.dev/docs/imagebackground */}
      <View style={styles.roomDetails}>
        <View style={styles.roomInfo}>
          <Text style={styles.roomTitle} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.roomReviews}>
            <View style={styles.stars}>{displayStars(ratingValue)}</View>
            <Text>{reviews} reviews</Text>
          </View>
        </View>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  roomCard: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
    paddingVertical: 20,
  },
  roomDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  roomInfo: { flex: 3, marginRight: 20 },
  roomPrice: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: "black",
    color: "white",
    width: 80,
  },
  roomTitle: { fontSize: 20, marginBottom: 12 },
  roomReviews: { flexDirection: "row", alignItems: "center" },
  roomPhoto: { justifyContent: "flex-end", height: 200 },
  avatar: { height: 100, width: 100, borderRadius: 50, flex: 1 },
  stars: { flexDirection: "row", marginRight: 6 },
});
