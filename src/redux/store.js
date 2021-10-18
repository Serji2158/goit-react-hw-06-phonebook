import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { contactsItemReducer } from "./Contacts/contactsReducer";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  contacts: contactsItemReducer,
});

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const persistConfig = {
  key: "contacts",
  storage,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  // middleware,
});

export const persistor = persistStore(store);
