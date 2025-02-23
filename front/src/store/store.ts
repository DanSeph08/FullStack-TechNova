import { configureStore } from '@reduxjs/toolkit';
import { microserviceApi } from '../api/microserviceApi';
import { actividadSlice } from './slices/actividadSlice';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

// Configurar redux-persist
const persistConfig = {
  key: 'root', 
  storage, 
  whitelist: ['actividades'], 
};

// Combinar reducers
const rootReducer = combineReducers({
  actividades: actividadSlice.reducer,
  [microserviceApi.reducerPath]: microserviceApi.reducer,
});

// Aplicar persistencia
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurar el store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Evita advertencias con redux-persist
    }).concat(microserviceApi.middleware),
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
