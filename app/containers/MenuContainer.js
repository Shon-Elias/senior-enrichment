import { connect } from 'react-redux';
import React, {Component} from 'react';
import store from '../store';
import Menu from '../components/Menu';


const mapStateToProps = (state, ownProps) => {

  console.log("Menu container state", state);
  console.log("Menu container ownProps", ownProps);

  return {
    students: state.students,
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {}
}



export default connect(mapStateToProps, mapDispatchToProps)(Menu);


