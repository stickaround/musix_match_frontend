import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../pages/auth/authSlice';
import artistReducer from '../pages/artist/artistSlice';
import albumReducer from '../pages/album/albumSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  artist: artistReducer,
  album: albumReducer,
});

export default rootReducer;
