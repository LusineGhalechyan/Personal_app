import { createStore } from "redux";
import { fetchData } from "./Actions";
// import { store } from "./ReduxStore";
import { experienceData } from "../../Data/ExperienceData";
// import { fetchExperienceData } from "./Actions";

export let ExperienceReducer = (state = [], action) => {
  return action.type === fetchData ? [...state, action.payload] : state;
};
export let store = createStore(ExperienceReducer);

store.dispatch({
  type: fetchData,
  payload: experienceData
});

console.log("store", store.getState());
