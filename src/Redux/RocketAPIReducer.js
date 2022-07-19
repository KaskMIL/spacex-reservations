import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH = 'rocketstore/rocket/FETCH';
const API = 'https://api.spacexdata.com/v3/rockets';
export const getRocketAPI = createAsyncThunk(FETCH, async () => {
  const endPoint = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = await endPoint.json();
  // console.log(result);
  return result;
});

// Slice Reducer

const initializeState = [];

const sliceRocket = createSlice({
  name: 'rockets',
  initialState: initializeState,
  extraReducers: {
    [getRocketAPI.fulfilled]: (state, action) => {
      const rockets = [];
      action.payload.forEach((rocket) => {
        const data = {
          rocket_id: rocket.id,
          rocket_name: rocket.rocket_name,
          rocket_type: rocket.type,
          rocket_description: rocket.description,
          rocket_image: rocket.flickr_images[0],
        };
        rockets.push(data);
      });
      return rockets;
    },
  },
});

export default sliceRocket.reducer;
