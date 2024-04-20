import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { alldriving } from '../../Redux/actions/driving-action';
import { DrivingActionTypes } from '../../Redux/constants/driving-action';
function DrivingRegistrationDetail() {
//   const [drivingData, setDrivingData] = useState([]);
//   const dispatch = useDispatch();
//   const drivings = useSelector((state) => state.drivingReducer.drivings);

//   useEffect(() => {
//     // Fetch the data when the component mounts
//     dispatch(alldriving());

//     // Update the drivingData state when the drivings prop changes
//     setDrivingData(drivings);
//   }, [dispatch, drivings]);

//   return (
//     <div>
//       {/* Render the cards */}
//       {drivingData.map((driving) => (
//         <div key={driving.id} className="card">
//           <div className="card-body">
//             <h5 className="card-title">Driving Registration</h5>
//             <p className="card-text">License Number: {driving.license_number}</p>
//             <p className="card-text">Full Name: {driving.full_name}</p>
//             <p className="card-text">Issue Date: {driving.issue_date}</p>
//             <p className="card-text">Expire Date: {driving.expire_date}</p>
//           </div>
//         </div>
//       ))}

//       {/* Your existing code */}
//       {/* ... */}
//     </div>
//   );
}

export default DrivingRegistrationDetail;