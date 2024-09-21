import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  const styles = StyleSheet.create({
    tile: {
      backgroundColor: color,
      elevation: 4,
    },
  });
  console.log(color);
  return (
    <View className="rounded-md overflow-hidden">
      <Pressable
        className="flex-1 m-4 h-[150px] w-[150px] items-center align-middle "
        style={styles.tile}
        android_ripple={{ color: "gray" }}
      >
        <View className={`flex-1 mt-[60px]`}>
          <Text className="text-xl font-bold text-slate-100">{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
