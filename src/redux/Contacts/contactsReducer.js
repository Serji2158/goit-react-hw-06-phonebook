import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addNewContact,
  deleteContact,
  getContacts,
  setFilter,
} from "./contactsActions";
// import {
//   ADDCONTACT,
//   DELETECONTACT,
//   GETCONTACTS,
//   SETFILTER,
// } from "./contactTypes";

const itemsReducer = createReducer([], {
  [addNewContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [getContacts]: (_, action) => action.payload,
});

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADDCONTACT:
//       return [...state, action.payload];

//     case DELETECONTACT:
//       return state.filter((contact) => contact.id !== action.payload);

//     case GETCONTACTS:
//       return action.payload;

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case SETFILTER:
//       return action.payload;

//     default:
//       return state;
//   }
// };

export const contactsItemReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
