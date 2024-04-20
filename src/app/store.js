import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../api/mapSlice"

// import todoReducer from "../api/mapSlice"
import accountReducer from "../api/accountSlice"

import userManagementReducer from "../api/userManagementSlice";
import notificationSlice from "../api/notificationSlice";


export const store = configureStore({
    reducer: {
        location: locationReducer,
        account: accountReducer,
        notify: notificationSlice,
        user: userManagementReducer

    }
});


