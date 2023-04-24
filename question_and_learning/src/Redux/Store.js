




import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice'

export default configureStore({
  reducer: {
    counter: CounterSlice
  }
})