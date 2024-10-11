import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const userslice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    setuserdata: (state, action) => {
        state.user = action.payload
        // console.log("user details", action.payload);
    }
  },
})

export const { setuserdata } = userslice.actions

export default userslice.reducer
