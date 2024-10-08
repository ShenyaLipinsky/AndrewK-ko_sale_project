import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

// Создание thunk для загрузки корзины с бэкенда

export const loadCart = createAsyncThunk(
  'cart/loadCart',
  async (_, { getState }) => {
    const { auth } = getState();
    if (auth.isAuthenticated) {
      const response = await fetch('https://medclub.onrender.com/cart', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to load cart');
      }
    } else {
      const data = JSON.parse(localStorage.getItem('cart')) || {};
      const groupedData = data.reduce((acc, item) => {
        if (acc[item.id]) {
          acc[item.id].quantity += item.quantity;
        } else {
          acc[item.id] = { ...item };
        }
        return acc;
      }, {});
      console.log(Object.values(groupedData));
      return groupedData;
    }
  }
);

// Сохранение корзины на сервере
const saveCart = createAsyncThunk(
  'cart/saveCart',
  async (cart, { getState }) => {
    const { auth } = getState();
    if (auth) {
      const response = await fetch('https://medclub.onrender.com/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error('Failed to save cart');
      }
    } else {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
);

// Создание slice для корзины
const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    // Добавление товара в корзину
    addItem: (state, action) => {
      const { id, title, price, quantity } = action.payload;
      if (!state[id]) {
        state[id] = { title, price, quantity, id };
      } else {
        state[id].quantity += quantity;
      }
    },
    // Удаление товара из корзины
    removeItem: (state, action) => {
      const id = action.payload;
      delete state[id];
    },
    // Изменение количества товара в корзине
    updateQuantity: (state, action) => {
      const { operationName, id, quantity } = action.payload;
      if (state[id].quantity === 1 && operationName === 'minus') {
        return;
      } else {
        state[id].quantity += quantity;
      }
    },
    // Очистка корзины
    clearCart: state => {
      return {};
    },
  },
  extraReducers: builder => {
    builder
      // Обработка успешной загрузки корзины с бэкенда
      .addCase(loadCart.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(saveCart.fulfilled, () => {})
      .addCase(saveCart.rejected, (state, action) => {
        console.error(action.error);
      });
  },
});

const persistConfig = {
  key: 'cart',
  storage,
};

export const cartReducer = persistReducer(persistConfig, cartSlice.reducer);

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export { saveCart };

export default cartSlice;
