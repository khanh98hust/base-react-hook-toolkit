import {createSlice} from '@reduxjs/toolkit';

const photo = createSlice({
  name : 'photo',
  initialState: [1, 2, 4, 3],
  reducers:{
    // actions
    addPhoto: (state, action) =>{ 
      state.push(action.payload)
      console.log(state);
    }
  }
})

const { reducer, actions} = photo
export const {addPhoto} = actions
export default reducer