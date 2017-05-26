import { connect } from 'react-redux';
import React from 'react';  //, {Component}
import store from '../store';
import Students from '../components/Students';
import { deleteStudentById } from '../action-creators/students';
// import { hashHistory } from 'react-router';  // IndexRedirect


const mapStateToProps = (state, ownProps) =>{

  console.log("Students container state", state);
  console.log("Students container ownProps", ownProps);


  return {
    students: state.students.listStudentReducer
  }
}




const mapDispatchToProps = (dispatch, ownProps) =>{
   return {
    deleteStudentById (studentId) {
      dispatch(deleteStudentById(studentId));
      // hashHistory.push(`/students`)

    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Students);








