import { authOperations } from './authOperations';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  id: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.pending](state) {
      state.isLoggedIn = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected](state) {
      state.isLoggedIn = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.id = action.payload.id;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
    },
  },
});
export default authSlice;

const persistConfig = {
  key: 'authorization',
  storage,
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

//------------------------------ SELECTORS ------------------------------//

const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsAdmin = state => state.auth.user.permissions;
const getUserEmail = state => state.auth.user.email;
const getUserId = state => state.auth.id;

export const authSelectors = {
  getUserEmail,
  getIsAdmin,
  getIsLoggedIn,
  getUserId,
};
//------------------------------ OPERATIONS ------------------------------//
