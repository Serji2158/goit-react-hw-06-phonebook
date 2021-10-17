import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactsItemReducer } from "./Contacts/contactsReducer";

const rootReducer = combineReducers({
  contacts: contactsItemReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
