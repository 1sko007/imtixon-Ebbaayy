import { configureStore } from '@reduxjs/toolkit'
import likeReducer from "../slice/likeSlice";
import saveReducer from '../slice/save'

export const store = configureStore({
  reducer: {
    like: likeReducer,
    save: saveReducer
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;