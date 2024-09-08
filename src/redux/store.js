import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authSlice, { authReducer } from '../redux/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  contactsApi,
  // , filterReducer, filter
} from './contactsSlice';
import cartSlice, { cartReducer, loadCart } from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authReducer,
    [cartSlice.name]: cartReducer,
    // [filter.type]: filterReducer,
    // [contactsApi.reducerPath]: contactsApi.reducer,
  },

  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   contactsApi.middleware,
  // ],
  middleware(getDefaultMiddleware) {
    return [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      contactsApi.middleware,
    ];
  },
});
store.dispatch(loadCart());
export const persistor = persistStore(store);

setupListeners(store.dispatch);
