import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../pages/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
