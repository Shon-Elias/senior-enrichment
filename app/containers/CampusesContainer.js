import { connect } from 'react-redux';
import React from 'react';  //, {Component}
import store from '../store';
import Campuses from '../components/Campuses';
import { deleteCampusById } from '../action-creators/campuses';

// import {receiveCampuses, getCampusById} from '../action-creators/campuses';


const mapStateToProps = (state, ownProps) =>{

  console.log("Campuses container state", state);
  // console.log("Campuses container ownProps", ownProps);

    return {
      campuses: state.campuses.listCampusReducer
    }

  }

const mapDispatchToProps = (dispatch, ownProps) =>{
   return {
    deleteCampusById (campusId) {
      dispatch(deleteCampusById(campusId));
      // hashHistory.push(`/students`)

    }
  };
}


// export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
export default connect(mapStateToProps, mapDispatchToProps)(Campuses);


