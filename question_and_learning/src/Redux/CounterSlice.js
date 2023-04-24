import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment:                      // Action-Type
    state => {                      //Reduction-action

      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer


// const initialState = 0;                                   //initial value
//   const Reducer = (state=initialState, action) => {       //name
//     switch (action.type) {                               // Action type with reducer action
//       case "Increment":
//         return state + 1;
//       case "Decrement":
//         return state - 1;
//       default:
//         return state;
//     }
//   };

//   export default Reducer;