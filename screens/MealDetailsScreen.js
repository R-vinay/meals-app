import { View, Text, Image, ScrollView, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";
import FavoriteButton from "../components/FavoriteButton";
import Favorite from "../context/Favorite";
const MealDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { mealID } = route.params;
  const { favorites } = useContext(Favorite);
  const current_meal = MEALS.find((meal) => meal.id === mealID);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: current_meal.title,
      headerRight: () => {
        return (
          <FavoriteButton
            meal={current_meal.id}
            isAlreadyFavorite={favorites.indexOf(mealID) >= 0}
          />
        );
      },
    });
  }, [mealID]);
  //   navigation.setOptions({ title: mealID });
  useLayoutEffect(() => {}, []);
  return (
    <ScrollView>
      <View className="m-2">
        <Image
          source={{ uri: current_meal.imageUrl }}
          className="w-[100%] h-[200px]"
        />

        <MealInfo itemData={current_meal} />

        <View className="m-2  border-b-2">
          <Text className="text-center text-2xl font-bold underline mb-4">
            Ingredients
          </Text>
          {current_meal.ingredients.map((ingredient, index) => {
            return (
              <View className="bg-slate-200 m-2 p-4 rounded-lg border-2 border-slate-300">
                <Text className="text-lg p-2" key={ingredient}>
                  {index + 1}. {ingredient}
                </Text>
              </View>
            );
          })}
          <View className="mb-5"></View>
        </View>
        <View className="m-2  border-b-2">
          <Text className="text-center text-2xl font-bold underline mb-4">
            Steps
          </Text>
          {current_meal.steps.map((step, index) => {
            return (
              <View className="bg-slate-200 m-2 p-4 rounded-lg border-2 border-slate-300">
                <Text className="text-lg p-2" key={step}>
                  {index + 1}. {step}
                </Text>
              </View>
            );
          })}
          <View className="mb-5"></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;
