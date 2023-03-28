import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import countriesSlice from "./countries-slice";
import themesSlice from "./themes-slice";

const combinedReducer = combineReducers({
  countries: countriesSlice.reducer,
  themes: themesSlice.reducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
