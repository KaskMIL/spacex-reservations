const FETCH_API = 'spacex-reservations/mission/FETCH_API';
const UPDATE_MISSION = 'spacex-reservations/mission/UPDATE_MISSION';
const initialState = [];
const baseMissionsUrl = 'https://api.spacexdata.com/v3/missions';

export const reservationUpdates = (id) => ({
  type: UPDATE_MISSION,
  payload: id,
});
export const fetchMissions = () => async (dispatch) => {
  const connect = await fetch(baseMissionsUrl);
  const res = await connect.json().then((dataObject) => dataObject);
  const dataArray = res.map((item) => {
    const data = {
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
      reserved: false,
    };
    return data;
  });
  dispatch({
    type: FETCH_API,
    payload: dataArray,
  });
};

export default function reducerMissions(state = initialState, action) {
  switch (action.type) {
    case FETCH_API:
      return action.payload;
    case UPDATE_MISSION:
      return [
        ...state.map((item) => {
          if (item.mission_id !== action.payload) {
            return item;
          }
          return { ...item, reserved: !item.reserved };
        }),
      ];
    default:
      return state;
  }
}
