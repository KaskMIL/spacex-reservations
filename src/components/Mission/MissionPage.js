import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';

const Missions = () => {
  const getMissions = useSelector((state) => state.missions);
  const missions = getMissions;
  // const dispatch = useDispatch();

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Missions;
