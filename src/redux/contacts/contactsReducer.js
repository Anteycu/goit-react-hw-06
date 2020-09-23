import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContacts = (state, action) => [...state, action.payload.contact];

const removeContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload.id);

const toggleSameName = (state, action) =>
  state.map((contact) =>
    contact.text === action.payload
      ? { ...contact, showContactListItem: true }
      : contact
  );

const items = createReducer([], {
  [contactsActions.addContact]: addContacts,
  [contactsActions.removeContact]: removeContact,
  [contactsActions.toggleSameName]: toggleSameName,
});

// const items = (state = [], { payload, type }) => {
//   switch (type) {
//     case contactsActions.addContact.type:
//       return [...state, payload.contact];

//     case contactsActions.removeContact.type:
//       return state.filter((contact) => contact.id !== payload.id);

//     case contactsActions.toggleSameName.type:
//       return state.map((contact) =>
//         contact.text === payload
//           ? { ...contact, showContactListItem: true }
//           : contact
//       );

//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload.filter,
});

// const filter = (state = "", { payload, type }) => {
//   switch (type) {
//     case contactsActions.changeFilter.type:
//       return payload.filter;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});

// handleAddContact = (name, number) => {
//   const contactObj = {
//     id: uuidv4(),
//     text: name,
//     number: number,
//   };

//   let sameName = checkSameContact(contactObj, this.state.contacts);

//   if (sameName) {
//     this.setState(() => ({
//       sameName: sameName.text,
//       showNotification: true,
//     }));
//   } else {
//     this.setState((prev) => ({
//       contacts: [...prev.contacts, contactObj],
//       showContactListItem: true,
//     }));
//   }
// };

// updateSameName = (name) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.map((contact) =>
//       contact.text === name
//         ? { ...contacts, showContactListItem: !contacts.showContactListItem }
//         : contact
//     ),
//   }));
// };
