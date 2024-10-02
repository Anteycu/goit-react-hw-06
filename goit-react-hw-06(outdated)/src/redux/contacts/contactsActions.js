import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/addContact", (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      text: name,
      number: number,
      showContactListItem: false,
    },
  },
}));

// const addContact = (name, number) => ({
//   type: actionTypes.ADD,
//   payload: {
//     contact: {
//       id: uuidv4(),
//       text: name,
//       number: number,
//       showContactListItem: false,
//     },
//   },
// });

const removeContact = createAction("contacts/removeContact", (id) => ({
  payload: {
    id,
  },
}));

// const removeContact = (id) => {
//   return {
//     type: actionTypes.REMOVE,
//     payload: {
//       id,
//     },
//   };
// };

const toggleSameName = createAction("contacts/toggleSameName");

// const toggleSameName = (text) => {
//   return {
//     type: actionTypes.TOGGLE,
//     payload: {
//       text,
//     },
//   };
// };

const changeFilter = createAction("contact/changeFilter", (filter) => ({
  payload: {
    filter,
  },
}));

// const changeFilter = (filter) => {
//   return {
//     type: actionTypes.FILTER,
//     payload: {
//       filter,
//     },
//   };
// };

export default {
  addContact,
  removeContact,
  toggleSameName,
  changeFilter,
};
