import axios from "axios";
import { DrivingActionTypes } from "../constants/driving-action";

export const alldriving = (drivings) => {
  return {
    type: DrivingActionTypes.ALL_DRIVING,
    payload: drivings,
   

  };
};

export const selecteddriving = (drive) => {
  return {
    type: DrivingActionTypes.SELECTED_DRIVING,
    payload: drive,
  };
};

export const removedriving = () => {
  return {
    type: DrivingActionTypes.REMOVED_DRIVING,
  };
};


export const createdriving = (name, licensenumber, issudate, expiredate,image) => {
  return async (dispatch) => {
    try {
      const formData = {
        "full_name":"weldish",
     "license_number":"09865570989747",
     "issue_date":"2024-03-25",
     "expire_date":"2024-03-25",
 };
      console.log('datais', formData)
      // Make the API request to create a new driving entry
      const response = await axios.post('http://192.168.1.43:8000/api/drivinglicenses',

        formData, {
        headers: {
          'Content-Type': 'application/json',

          'Authorization': 'Bearer bb440b989afeac2469fca92532efcbe93bd22882'
        },
      });
      console.log('Response:', response);

      if (response.status >= 200 && response.status < 300) {
        // Driving entry created successfully
        const data =  response.data;
        // console.log(`the data is ${data}`);
        // Dispatch an action to handle the successful response
        dispatch({ type: DrivingActionTypes.CREATE_DRIVING_SUCCESS, payload: data });


        // You can handle any necessary logic after creating the driving entry, such as updating the driving list
      } else {
        // Handle the error response
        const errorData =  response.data;

        // Dispatch an action to handle the error
        dispatch({ type: DrivingActionTypes.CREATE_DRIVING_FAILURE, payload: errorData });

        throw new Error('Failed to create driving data');
      }
    } catch (error) {
      // Handle any network or other errors
      console.log("the main problem arse from", error);
      dispatch({ type: DrivingActionTypes.CREATE_DRIVING_FAILURE, payload: error.message });

      throw error;
    }
  }
};