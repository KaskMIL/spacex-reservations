// API Url
const baseUrl = 'https://api.spacexdata.com/v3/dragons';

// Actions
const GETDRAGONS = 'spacex-reservation/dragons/GET_DRANGONS';
const RESERVE = 'spacex-reservation/dragons/RESERVE';

// Initial state
const initialState = [];

// Action creators
export const getDragonsAPI = () => async (dispatch) => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const dataAPI = await response.json();
  const dragonArr = dataAPI.map((dragon) => {
    const newDragon = {
      dragon_id: dragon.id,
      dragon_name: dragon.name,
      dragon_type: dragon.type,
      dragon_description: dragon.description,
      dragon_images: dragon.flickr_images[2],
      reserved: false,
    };
    return newDragon;
  });
  dispatch({
    type: GETDRAGONS,
    payload: dragonArr,
  });
};

export const reserve = (dragonId) => ({
  type: RESERVE,
  payload: dragonId,
});

// Reducer
export default function dragonsReducer(state = initialState, action) {
  switch (action.type) {
    case GETDRAGONS:
      return action.payload;
    case RESERVE:
      return [
        ...state.map((dragon) => {
          if (dragon.dragon_id === action.payload) {
            return { ...dragon, reserved: true };
          }
          return dragon;
        }),
      ];
    default:
      return state;
  }
}
