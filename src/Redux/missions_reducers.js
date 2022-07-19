import { GET_MISSION } from './mission_actions';

const initialState = {
  cities: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MISSION:
      return { ...state, GET_MISSION: action.payload };
    default:
      return state;
  }
}

export default userReducer;
