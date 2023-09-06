// import { configureStore } from '@reduxjs/toolkit';

// // Define initial state
// const initialState = {
//     appliedJob: '', //initial value of applidJob state
// }

// // Define the reducer function

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case 'SET_APPLIED_JOB':
//             return {...state, appliedJob: action.payload}
//         default:
//             return state;
//         }
// }

// const store = createStore(reducer)

// export default store



// store.js
import { configureStore } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  appliedJob: [], // initial value of appliedJob state
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_APPLIED_JOB':
      return { ...state, appliedJob: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;
