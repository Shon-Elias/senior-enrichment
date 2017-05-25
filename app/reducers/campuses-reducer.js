import {
  RECEIVE_CAMPUSES,
  RECEIVE_CAMPUS
} from '../constants';

// import {convertCampuses, convertCampus} from '../utils';

const initialCampusesState = {
  listCampusReducer: [],
  selectedCampusReducer: {}
};


export default function (state = initialCampusesState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_CAMPUSES:
      // newState.listCampusReducer = convertCampuses(action.campuses);
      newState.listCampusReducer = action.campuses;

      break;

    case RECEIVE_CAMPUS:
      // newState.selectedCampusReducer = convertCampus(action.campus);
      newState.selectedCampusReducer = action.campus;

      break;

    default:
      return state;

  }

  return newState;
}
