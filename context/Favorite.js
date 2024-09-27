import React, { createContext } from "react";
const Favorite = createContext({
  favorites: [],
  addFavoriteMeal: () => {},
  removeMealFromFavorites: () => {},
});

export default Favorite;
