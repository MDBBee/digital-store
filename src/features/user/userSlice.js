import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const getTheme = () => {
  const theme = localStorage.getItem('themeData') || 'winter';
  document.querySelector('html').setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: { username: 'bcu' },
  theme: getTheme(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('LogIn');
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
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
