import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../pages/auth/authSlice';
import artistReducer from '../pages/artist/artistSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  artist: artistReducer,
});

export default rootReducer;
