import { RECEIVE_CAMPUSES, RECEIVE_CAMPUS, DELETE_CAMPUS, NEW_CAMPUS } from '../constants';
import { hashHistory } from 'react-router';  // IndexRedirect

import axios from 'axios';
import store from '../store';

export const receiveCampuses = campuses => ({
    type: RECEIVE_CAMPUSES,
    campuses
});

export const receiveCampus = campus => ({
    type: RECEIVE_CAMPUS,
    campus
});

export const deleteCampus = id => ({
  type: DELETE_CAMPUS,
  id
});

export const createCampus = campus => ({
    type: NEW_CAMPUS,
    campus
});

export const getCampusById = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
      .then(response => {
        dispatch(receiveCampus(response.data));
      });
  };
};

export const deleteCampusById = campusId => {
  return dispatch => {
    axios.delete(`/api/campuses/${campusId}`)
    .then(() => {
      dispatch(deleteCampus(campusId));
    })
    .catch(console.log);

  };
};


export const addNewCampus = newCampus => {

  return (dispatch) => {
    return axios.post('/api/campuses', newCampus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(createCampus(newCampus));   // I probably can delete it but just to make sure
        hashHistory.push(`/campuses/${newCampus.id}`)

      })
      // .catch(console.log(error));


  };

};


// return (dispatch, getState) => {

//     return axios.post('/api/playlists', {name: playlistName})
//       .then(res => res.data)
//       .then(playlist => {
//         const newListOfPlaylists = getState().playlists.list.concat([playlist]);
//         dispatch(receivePlaylists(newListOfPlaylists));
//         hashHistory.push(`/playlists/${playlist.id}`)
//       });

//   };

// Students from specific campus
// Axios path will be api/campuses/students/:id
// export const deleteCampusById = campuseId

