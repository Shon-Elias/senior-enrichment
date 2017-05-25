import {
  RECEIVE_STUDENTS,
  RECEIVE_STUDENT
} from '../constants';

// import {convertStudents, convertStudent} from '../utils';

const initialStudentState = {
  listStudentReducer: [],
  selectedStudentReducer: {}
};

export default function (state = initialStudentState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_STUDENTS:

      // newState.listStudentReducer = convertStudents(action.students)
      newState.listStudentReducer = action.students
      break;

    case RECEIVE_STUDENT:
      newState.selectedstudentReducer = action.student;
      break;

    default:
      return state;
  }

  return newState
}

