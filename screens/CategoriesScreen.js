import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
//rnfe
const renderCategoryItem = (item) => {
  return <CategoryGridTile title={item.title} color={item.color} />;
};
const CategoriesScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <Text>CategoriesScreen</Text>
        <FlatList
          data={CATEGORIES}
          renderItem={(items) => renderCategoryItem(items.item)}
          keyExtractor={(item) => {
            item.id;
          }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
