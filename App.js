import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import CategoryGridTile from "./components/CategoryGridTile";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <CategoriesScreen />
      <StatusBar style="auto" />
    </View>
  );
}
