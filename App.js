import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import CategoryGridTile from "./components/CategoryGridTile";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import "./gesture-handler";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          title: "All Categories",
          headerStyle: { backgroundColor: "#E23744" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Meals" component={MealsScreen} />
        <Stack.Screen name="Meal" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
