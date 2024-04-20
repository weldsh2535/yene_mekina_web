import { createStore, combineReducers } from 'redux';

import drivingReducer from './driving-reducer';

// Import other reducers here

// Combine your reducers into a root reducer
const  reducers = combineReducers({
    drivingReducer:drivingReducer,
     
     
    
  // Add other reducers here
});
export default  reducers;
// Create the Redux store with the root reducer and middleware
// const store = createStore(rootReducer, applyMiddleware(thunk));

// // Export the store
// export default store;