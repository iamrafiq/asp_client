import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import countriesReducer from "./countriesReducer";
import activityReducer from "./activityReducer";
export default configureStore({
  reducer: {
    countries: countriesReducer,
    activity: activityReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
 }),
});
