const FETCH = 'rocketstore/rocket/FETCH';
const UPDATE_FETCH = 'rocketstore/rocket/UPDATE_FETCH';
const API = 'https://api.spacexdata.com/v3/rockets';
const initializeState = [];

export const getRocketAPI = () => async (dispatch) => {
  const endPoint = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = await endPoint.json();
  const payLoad = await result.map((rocket) => {
    const data = {
      rocketId: rocket.id,
      rocketName: rocket.rocket_name,
      rocketType: rocket.rocket_type,
      rocketDescription: rocket.description,
      rocketImage: rocket.flickr_images[0],
      reserved: true,
    };
    return data;
  });
  dispatch({
    type: FETCH,
    payLoad,
  });
};

export const rocketReducer = (state = initializeState, action) => {
  const { payLoad } = action;
  switch (action.type) {
    case FETCH:
      return payLoad;
    case UPDATE_FETCH: {
      return [
        ...state.map((rocket) => {
          if (rocket.rocketId !== payLoad) {
            return { ...rocket };
          }
          return { ...rocket, reserved: !rocket.reserved };
        }),
      ];
    }

    default:
      return state;
  }
};

export const updateRESERVATION = (id) => async (dispatch) => {
  dispatch({
    type: UPDATE_FETCH,
    payLoad: id,
  });
  // console.log(id);
};
