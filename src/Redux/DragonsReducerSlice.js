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
export const initialState = [];

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    dragonReserve: {
      reducer: (state, action) => state.map((dragon) => (
        dragon.dragon_id === action.payload ? { ...dragon, reserved: true } : dragon)),
      prepare: (dragonId) => ({ payload: dragonId }),
    },
  },
  extraReducers: {
    [getDragonsAPI.fulfilled]: (state, action) => {
      const dragons = [];
      action.payload.forEach((dragon) => {
        const data = {
          dragon_id: dragon.id,
          dragon_name: dragon.name,
          dragon_type: dragon.type,
          dragon_description: dragon.description,
          dragon_images: dragon.flickr_images[2],
          reserved: false,
        };
        dragons.push(data);
      });
      return dragons;
    },
  },
});

export const { dragonReserve } = dragonSlice.actions;

export default dragonSlice.reducer;
