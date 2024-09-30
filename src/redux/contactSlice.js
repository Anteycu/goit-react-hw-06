import { createAction, createSlice } from "@reduxjs/toolkit";
import initContacts from "../initContacts.json";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const selectContacts = (state) => state.contacts.items;

const initialState = {
  items: initContacts,
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "contacts/deleteContact":
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };

    default:
      return state;
  }
}

// const contactsSlice = createSlice({});
