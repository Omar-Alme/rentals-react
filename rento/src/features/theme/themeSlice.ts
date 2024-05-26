import { applyTheme } from '@/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light' | 'system'


type ThemState = {
  theme: Theme;
};

const initializeTheme = ():Theme =>{
  const theme = localStorage.getItem('theme') as Theme || 'system'
  applyTheme(theme)
  return theme;
}

const initialState:ThemState = {
  theme: initializeTheme(),
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme:(state,action: PayloadAction<Theme>)=>{
      state.theme = action.payload
      applyTheme(action.payload)
      localStorage.setItem('theme', action.payload);
    }
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;