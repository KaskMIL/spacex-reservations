import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, reservationUpdates } from '../../Redux/mission';
import Navigation from '../Navigation/Navigation';
import './missionPage.css';

const Missions = () => {
  const getMissions = useSelector((state) => state.missions);
  const missions = getMissions;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!getMissions.length) {
      dispatch(fetchMissions());
    }
  }, []);
  return (
    <div>
      <Navigation />
      <div className="missionContainer">
        <table className="missionTable" cellSpacing="0">
          <thead>
            <tr>
              <th className="mission">Missions</th>
              <th className="descr">Description</th>
              <th className="status">Status</th>
              <th className="btn"> </th>
            </tr>
          </thead>
          <tbody>
            {missions.map((data) => (
              <tr key={data.mission_id}>
                <td className="Title">{data.mission_name}</td>
                <td>{data.description}</td>
                <td>
                  {data.reserved && (
                    <span style={{ background: 'green' }}>Active member</span>
                  )}
                  {data.reserved && <span>NOT A MEMBER </span>}
                </td>
                <td className="updateBtn">
                  <button
                    type="button"
                    onClick={() => dispatch(reservationUpdates(data.mission_id))}
                    style={{
                      border: !data.reserved
                        ? '1px solid black'
                        : '1px solid red',
                      backgroundColor: 'white',
                      color: !data.reserved ? 'black' : 'red',
                    }}
                  >
                    {!data.reserved ? 'Join mission' : 'Leave mission'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Missions;
