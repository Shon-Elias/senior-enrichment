import { RECEIVE_STUDENTS, RECEIVE_STUDENT, DELETE_STUDENT, NEW_STUDENT } from '../constants';
import axios from 'axios';
// import  onAppEnter  from '../main.jsx';
import store from '../store';
import { hashHistory } from 'react-router';  // IndexRedirect


export const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});

export const receiveStudent = student => ({
    type: RECEIVE_STUDENT,
    student
});

export const deleteStudent = id => ({
  type: DELETE_STUDENT,
  id
});

export const createStudent = student => ({
    type: NEW_STUDENT,
    student
});

export const getStudentById = studentId => {
  return dispatch => {
    axios.get(`/api/students/${studentId}`)
      .then(response => {
        dispatch(receiveStudent(response.data));
      });
  };
};

export const deleteStudentById = studentId => {
  return dispatch => {
    axios.delete(`/api/students/${studentId}`)
    .then(() => {
      dispatch(deleteStudent(studentId));
    })
    .catch(console.log);

  };
};



export const addNewStudent = myNewStudent => {

  return (dispatch) => {

    return axios.post('/api/students', { myNewStudent })
      .then(res => res.data)
      .then(newStudent => {
        dispatch(createStudent(newStudent));   // I probably can delete it but just to make sure
        hashHistory.push(`/students/${newStudent.id}`)

      })
  };

};



