import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API Url
const baseUrl = 'https://api.spacexdata.com/v3/dragons';

// Actions

const GETDRAGONS = 'spacex-reservation/dragons/GET_DRANGONS';

// Async action creators

export const getDragonsAPI = createAsyncThunk(GETDRAGONS, async () => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
});

// Slice reducer
const initialState = [];

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  extraReducers: {
    [getDragonsAPI.fulfilled]: (state, action) => {
      const dragons = [];
      action.payload.forEach((dragon) => {
        const data = {
          dragon_id: dragon.id,
          dragon_name: dragon.name,
          dragon_type: dragon.type,
          dragon_description: dragon.description,
          dragon_images: dragon.flickr_images,
        };
        dragons.push(data);
      });
      return dragons;
    },
  },
});

export default dragonSlice.reducer;
