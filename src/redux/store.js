import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactSlice";
import filterReducer from "./filterSlice";

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     }
//     case "contacts/deleteContact":
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(({ id }) => id !== action.payload),
//         },
//       };

//     case "filters/setFilter":
//       return {
//         ...state,
//         filters: {
//           name: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
