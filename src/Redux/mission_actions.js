export const GET_MISSION = 'Get_MISSION';
const MISSION_API_URL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(MISSION_API_URL, {
        method: 'GET',
        headers: {
          'Constent-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_MISSION,
          payload: json,
        });
      } else {
        console.log('unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
