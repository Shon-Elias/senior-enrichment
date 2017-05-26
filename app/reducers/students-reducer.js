import {
  RECEIVE_STUDENTS,
  RECEIVE_STUDENT,
  DELETE_STUDENT,
  NEW_STUDENT
} from '../constants';

// import {convertStudents, convertStudent} from '../utils';

const initialStudentState = {
  listStudentReducer: [],
  selectedStudentReducer: {}
};

export default function (state = initialStudentState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_STUDENTS:

      // newState.listStudentReducer = convertStudents(action.students)
      newState.listStudentReducer = action.students;
      break;

    case RECEIVE_STUDENT:
      newState.selectedstudentReducer = action.student;
      break;

    case NEW_STUDENT:
      newState.listStudentReducer = [action, ...newState.listStudentReducer];
      break;


    case DELETE_STUDENT:
      newState.listStudentsReducer = newState.listStudentsReducer.filter(student => {
        return student.id !== action.id;
      });

      newState.listStudentsReducer = action.students;
      break;

    default:
      return state;
  }

  return newState;
}

