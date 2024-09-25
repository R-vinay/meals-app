import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const FavoriteButton = () => {
  const [isFavorite, setFavorite] = useState(false);
  return (
    <View className="overflow-hidden">
      <Pressable
        className="mr-2 overflow-hidden"
        android_ripple={{ color: "gray" }}
      >
        <Ionicons
          name={`${isFavorite ? "heart-sharp" : "heart-outline"}`}
          size={28}
          color={"white"}
          onPress={() => setFavorite(!isFavorite)}
        />
      </Pressable>
    </View>
  );
};

export default FavoriteButton;
