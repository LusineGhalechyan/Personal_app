// import { createStore, combineReducers } from "redux";
// import { ExperienceReducer } from "./ExperienceReducer";

// let rootReducer = combineReducers({
//   experienceData: ExperienceReducer
// });

// let rootReducer = (state = [], action) => {
//   if (action.type === "fetchData") {
//     return [...state, action.payload];
//   }
//   return state;
// };

// export let store = createStore(rootReducer);

// console.log("store", store.getState());

// store.dispatch({ type: "fetchData", payload: "good morning" });
