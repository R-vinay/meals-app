import { View, Text, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Favorite from "../context/Favorite";
const FavoriteButton = ({ meal, isAlreadyFavorite }) => {
  console.log(meal);
  const [isFavorite, setFavorite] = useState(isAlreadyFavorite);
  const { addFavoriteMeal, favorites, removeMealFromFavorites } =
    useContext(Favorite);
  let mealExistsInFavorites = favorites.indexOf(meal) >= 0;
  useEffect(() => {
    if (isFavorite && !mealExistsInFavorites) {
      addFavoriteMeal(meal);
    } else if (!isFavorite && mealExistsInFavorites) {
      removeMealFromFavorites(meal);
    }
  }, [isFavorite]);
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
