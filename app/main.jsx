'use strict'
// React
import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory } from 'react-router';  // IndexRedirect

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Action creators
import {receiveCampuses, getCampusById} from './action-creators/campuses';
import {receiveStudents, getStudentById} from './action-creators/students';

//Components
import App from './components/App';
import Campuses from './components/Campuses';

// Containers
import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import StudentsContainer from './containers/StudentsContainer';
// import Students from './components/Students'

const onAppEnter = function () {

  Promise.all([
    axios.get('/api/campuses'),
    axios.get('/api/students')
  ])
    .then(responses => responses.map(res => res.data ))
    .then(([campuses, students]) => {
      // console.log("CAMPUS HERE ====>", campuses)
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveStudents(students));
      // console.log("STORE", store)
    })
    .catch(err => console.log("ERROR once App enter", err))

};

const onCampusEnter = function (nextRouterState) {

  console.log("Iam your next state", nextRouterState)

  const campusId = nextRouterState.params.id;
  store.dispatch(getCampusById(campusId));
};

const onStudentEnter = function (nextRouterState) {

  console.log("Iam your next state", nextRouterState)

  const studentId = nextRouterState.params.id;
  store.dispatch(getStudentById(studentId));
};

// call store
render (

  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={onAppEnter} >
        <Route path="campuses" component={CampusesContainer} />
        <Route path="campuses/:id" component={CampusContainer} onEnter={onCampusEnter} />
        <Route path="students" component={StudentsContainer} />
        <Route path="students/:id" component={StudentsContainer} onEnter={onStudentEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
