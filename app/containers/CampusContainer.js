import {connect} from 'react-redux';
import React from 'react';
import store from '../store';
import Campus from '../components/Campus';


 const mapStateToProps = (state, ownProps)=>{

   console.log("CampusContainer   STATE ========>",  state);

   console.log("CampusContainer   ============>",  ownProps);


  return {
    selectedCampus: state.campuses.selectedCampusReducer,

  }

}


const mapDispatchToProps = (dispatch, ownProps) => {
      console.log("DISPATCH", dispatch);
      console.log("PPPPROP", ownProps);
    // return dispatch(selectedCampus)
    // return dispatch(selectedCampus);
}

export default connect(mapStateToProps)(Campus);
