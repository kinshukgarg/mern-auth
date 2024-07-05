import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Adjust the path if needed
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';

// Combine reducers
const rootReducer = combineReducers({ user: userReducer });

// Persist configuration
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoredActions: [
        //   'persist/PERSIST',
        //   'persist/REHYDRATE',
        //   'persist/PAUSE',
        //   'persist/PURGE',
        //   'persist/FLUSH',
        //   'persist/REGISTER',
        // ],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);
