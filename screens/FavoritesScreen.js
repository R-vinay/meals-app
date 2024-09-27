import { View, Text } from "react-native";
import React, { useContext } from "react";
import Favorite from "../context/Favorite";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { FlatList } from "react-native-gesture-handler";

const FavoritesScreen = () => {
  const { favorites } = useContext(Favorite);
  const favoriteMeals = favorites.map((favorite_meal_id) =>
    MEALS.find((meal) => meal.id === favorite_meal_id)
  );
  console.log(favoriteMeals);
  return (
    <View>
      <FlatList
        data={favoriteMeals}
        renderItem={(item) => <MealItem itemData={item.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;
