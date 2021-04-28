import {configureStore} from '@reduxjs/toolkit';
import nameReducer from '../slices/nameSlice';

const rootReducer = {
  nameReducer,
}

const store = configureStore({
  reducer: rootReducer
})

export default store