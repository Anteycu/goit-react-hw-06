import { configureStore } from "@reduxjs/toolkit";
import initContacts from "../initContacts.json";

const initialState = {
  contacts: {
    items: initContacts,
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
