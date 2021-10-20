import { combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { contactsItemReducer } from "./Contacts/contactsReducer";
import {
  persistStore,
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

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsItemReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);
