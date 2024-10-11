import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/userslice'


export const store = configureStore({
  reducer: {
    user: userReducer

  },
  
})
// console.log("datax now", userReducer);

export default store
