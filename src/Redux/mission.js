const FETCH_API = 'spacex-reservations/missions/FETCH_API';
const initialState = [];
const baseMissionsUrl = 'https://api.spacexdata.com/v3/missions';

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
    default:
      return state;
  }
}
