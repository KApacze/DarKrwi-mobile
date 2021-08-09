import {
  CHOOSE_REGION,
  SHOW_ONE_TIME_EVENTS,
  SHOW_STATIONARY_POINTS,
  SEARCH_VALUE,
  SUBMIT_FORM,
} from "../actions/types";
import { combineReducers } from "redux";

const initializedState = {
  showEvents: true, //true - onetimeevents, false - stationarypoints
  pickedRegion: "RCKIKBialystok",
  searchValue: "",
};

const eventsReducer = (state = initializedState, action) => {
  switch (action.type) {
    case CHOOSE_REGION:
      return Object.assign({}, state, { pickedRegion: action.pickedRegion });
    case SHOW_ONE_TIME_EVENTS:
      return Object.assign({}, state, { showEvents: true });
    case SHOW_STATIONARY_POINTS:
      return Object.assign({}, state, { showEvents: false });
    case SEARCH_VALUE:
      return Object.assign({}, state, { searchValue: action.searchValue });
    default:
      return state;
  }
};

const formReducer = (state = initializedState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return Object.assign({}, state, { pickedRegion: action.pickedRegion });
    default:
      return state;
  }
};
export default combineReducers({
  events: eventsReducer,
  forms: formReducer,
});
