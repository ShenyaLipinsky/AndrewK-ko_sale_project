import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://medclub.onrender.com/api/';

export const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

// let token = {
//   set(token) {
//     axios.defaults.headers.authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.authorization = '';
//   },
// };

const add = createAsyncThunk('products', async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post('products', credentials);
    // token.set(data.token);
    return data;
  } catch (error) {
    // console.log(error.response.data.message);
    if (error.response.data.message !== undefined) {
      Notiflix.Notify.failure(
        `${error.response.data.message}`,
        notiflixOptions
      );
      return thunkApi.rejectWithValue();
    }
    Notiflix.Notify.failure(`${error.message}`, notiflixOptions);
    return thunkApi.rejectWithValue();
  }
});

const update = createAsyncThunk('products', async (credentials, thunkApi) => {
  try {
    console.log(credentials);
    const { id } = credentials;

    const removeKey = (key, data) =>
      Object.fromEntries(Object.entries(data).filter(([k]) => k !== key));

    const newData = removeKey('id', credentials);
    console.log(newData);

    const { data } = await axios.put(`products/${id}`, newData);
    // token.set(data.token);
    return data;
  } catch (error) {
    // console.log(error.response.data.message);
    if (error.response.data.message !== undefined) {
      Notiflix.Notify.failure(
        `${error.response.data.message}`,
        notiflixOptions
      );
      return thunkApi.rejectWithValue();
    }
    Notiflix.Notify.failure(`${error.message}`, notiflixOptions);
    return thunkApi.rejectWithValue();
  }
});

// const logIn = createAsyncThunk('users/login', async (credentials, thunkApi) => {
//   try {
//     const { data } = await axios.post('users/login', credentials);
//     token.set(data.token);

//     return data;
//   } catch (error) {
//     console.log(error);
//     if (error.response.status === 401) {
//       Notiflix.Notify.failure(`Invalid user data`, notiflixOptions);
//     } else {
//       Notiflix.Notify.failure(`${error.message}`, notiflixOptions);
//     }
//     return thunkApi.rejectWithValue();
//   }
// });

// const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const savedToken = state.auth.token;
//     if (savedToken === null) {
//       return thunkApi.rejectWithValue();
//     }
//     token.set(savedToken);
//     try {
//       const response = await axios.get('users/current', state.auth.user.email);
//       return response.data;
//     } catch (error) {
//       if (error.response.status === 401) {
//         Notiflix.Notify.failure(`Login time has expired`, notiflixOptions);
//       } else {
//         Notiflix.Notify.failure(`${error.message}`, notiflixOptions);
//       }
//       return thunkApi.rejectWithValue();
//     }
//   }
// );

// const logOut = createAsyncThunk('users/logout', async credentials => {
//   try {
//     await axios.get('users/logout', credentials);
//     token.unset();
//     return;
//   } catch (error) {
//     Notiflix.Notify.failure(`${error.message}`, notiflixOptions);
//   }
// });

// const fetchCurrentUserContacts = createAsyncThunk(
//   'auth/getContacts',
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const savedToken = state.auth.token;
//     if (savedToken === null) {
//       return thunkApi.rejectWithValue();
//     }
//     token.set(savedToken);
//     try {
//       const response = await axios.get('contacts');
//       return response.data.payload;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const productsOperations = {
  add,
  update,
  // logIn,
  // logOut,
  // fetchCurrentUser,
  // fetchCurrentUserContacts,
};
