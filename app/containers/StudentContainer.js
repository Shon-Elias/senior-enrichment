import {connect} from 'react-redux';
import React, {Component} from 'react';
import store from '../store';
import Student from '../components/Student';



const mapStateToProps = (state, ownProps)=>{

  console.log("Student container state", state);
  console.log("Student container ownProps", ownProps);

  return {
    selectedStudent: state.students.selectedStudentReducer
  }

}


// const mapDispatchToProps = (dispatch, ownProps) => {}

export default connect(mapStateToProps)(Student);
