import {
    CHOOSE_REGION,
    SHOW_ONE_TIME_EVENTS,
    SHOW_STATIONARY_POINTS,
    SEARCH_VALUE
  } from "./types";

 // const dispatch = useDispatch();

  export function changeRegion(region) {
    return function(dispatch) {
     dispatch(dispatchRegionChange(region));
    };
}

  function dispatchRegionChange(region) {
    return({
      type: CHOOSE_REGION,
      pickedRegion: region
  })
  }

  export function showOneTimeEvents() {
    return (dispatch) => dispatch({
        type: SHOW_ONE_TIME_EVENTS,
    })
  }

  export function showStationaryPoints() {
    return (dispatch) => dispatch({
        type: SHOW_STATIONARY_POINTS,
    })
    }

  export function searchValue(value) {
    return (dispatch) => dispatch({
      type: SEARCH_VALUE,
      searchValue: value
     })
  }