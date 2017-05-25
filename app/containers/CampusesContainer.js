import { connect } from 'react-redux';
import React from 'react';  //, {Component}
import store from '../store';
import Campuses from '../components/Campuses';
// import {receiveCampuses, getCampusById} from '../action-creators/campuses';


const mapStateToProps = (state, ownProps) =>{

  console.log("Campuses container state", state);
  // console.log("Campuses container ownProps", ownProps);

    return {
      campuses: state.campuses.listCampusReducer
    }

  }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   // console.log(" on props", ownProps)
//   // return ownProps.campuses
//   // return dispatch(receiveCampuses(ownProps.campuses));
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
export default connect(mapStateToProps)(Campuses);


