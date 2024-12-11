import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: INITIAL_STATE,
  reducers: {
    addFavorites(state, action) {
      if (!state.favorites.some(item => item._id === action.payload._id)) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          item => item._id !== action.payload._id
        );
      }
    },
  },
});

export const { addFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
