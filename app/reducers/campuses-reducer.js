import {
  RECEIVE_CAMPUSES,
  RECEIVE_CAMPUS,
  DELETE_CAMPUS,
  NEW_CAMPUS
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

    case NEW_CAMPUS:
      newState.listCampusReducer = [action, ...newState.listCampusReducer];
      break;

    case DELETE_CAMPUS:

      newState.listCampusReducer = newState.listCampusReducer.filter(campus => {
        return campus.id !== action.id;
      });
      break;

    default:
      return state;

  }

  return newState;
}
