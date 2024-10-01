import { createSlice } from "@reduxjs/toolkit";
import initContacts from "../initContacts.json";

export const selectContacts = (state) => state.contacts.items;

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: initContacts,
  },
  reducers: {
    addContact: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
