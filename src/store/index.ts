import { configureStore } from "@reduxjs/toolkit";
import GamesReducer from "./games";
import OptionsReducer from "./options";

const store = configureStore({
  reducer: {
    options: OptionsReducer,
    games: GamesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
