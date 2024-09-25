import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import CategoryGridTile from "./components/CategoryGridTile";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsScreen from "./screens/MealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

// import "./gesture-handler";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#E23744" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#F4F4F2" },
        drawerActiveBackgroundColor: "#E23744",
        drawerActiveTintColor: "#F4F4F2",
        drawerInactiveTintColor: "#2D2D2D",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="category" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: "#E23744" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Meals" component={MealsScreen} />
        <Stack.Screen name="Meal" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
