import { DrivingActionTypes } from "../constants/driving-action";

const initialState = {
  drivingList: [],
  selectedDriving: null,
};

 const drivingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DrivingActionTypes.ALL_DRIVING:
      return {
        ...state,
        drivingList: action.payload,
      };
    case DrivingActionTypes.SELECTED_DRIVING:
      return {
        ...state,
        selectedDriving: action.payload,
      };
    case DrivingActionTypes.REMOVED_DRIVING:
      return {
        ...state,
        selectedDriving: null,
      };
    case DrivingActionTypes.CREATE_DRIVING_SUCCESS:
      return {
        ...state,
        drivingList: [...state.drivingList, action.payload],
      };
    case DrivingActionTypes.CREATE_DRIVING_FAILURE:
      return state; // You can handle the failure state in a way that suits your application

    // Add additional cases for other actions if needed

    default:
      return state;
  }
};

export default drivingReducer;