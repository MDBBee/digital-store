import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const getTheme = () => {
  const theme = localStorage.getItem('themeData') || 'winter';
  document.querySelector('html').setAttribute('data-theme', theme);
  return theme;
};

const getUserFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
  user: getUserFromLocalStorage(),
  theme: getTheme(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      //   localStorage.removeItem('themeData');
      toast.success('Logged out confirmed!!');
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'winter' ? 'business' : 'winter';
      document.querySelector('html').setAttribute('data-theme', state.theme);
      localStorage.setItem('themeData', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
