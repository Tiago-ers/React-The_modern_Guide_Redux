import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
  // reducer: { counter: counterSlice.reducer }, //Alternativa
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'addincrement') {
//     return {
//       counter: state.counter + 5,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

//Actions

export default store;
