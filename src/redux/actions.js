// import {
//   ADDCONTACT,
//   DELETECONTACT,
//   GETCONTACTS,
//   SETFILTER,
// } from "./Contacts/contactTypes";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addNewContact = createAction(
  "contactsActions/addContact",
  (contact) => ({
    payload: {
      contact,
      id: uuidv4(),
    },
  })
);

// export const addNewContact = (contact) => ({
//   type: ADDCONTACT,
//   payload: {
//     contact,
//     id: uuidv4(),
//   },
// });

export const deleteContact = createAction("contactActions/deleteContact");

// export const deleteContact = (id) => ({
//   type: DELETECONTACT,
//   payload: id,
// });

export const getContacts = createAction("contactsActions/getContacts");

// export const getContacts = (contacts) => ({
//   type: GETCONTACTS,
//   payload: contacts,
// });

export const setFilter = createAction("contactsActions/setFilter");

// export const setFilter = (filter) => ({
//   type: SETFILTER,
//   payload: filter,
// });

// export default { addNewContact, deleteContact, getContacts, setFilter };
