import contactReducer from "./contacts/contactsReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
