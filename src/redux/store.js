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
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    case "contacts/deleteContact":
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(({ id }) => id !== action.payload),
        },
      };

    case "filters/setFilter":
      return {
        ...state,
        filters: {
          name: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
