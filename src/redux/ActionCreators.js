import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../common/baseUrl';
import { actions } from 'react-redux-form';

export const updateResume = (resume) => (dispatch) => {
  alert(JSON.stringify(resume.Header))
  dispatch(actions.load('resume', resume));
  dispatch(updateResumeLoading());
};

export const saveResume = (resume) => (dispatch) => {

    dispatch(resumeLoading());
    var newResume = resume;
    var resumeID = resume.Header.Email.split('@').join("_").split('.').join('_');
    // newResume.id = resumeID;
    // resumeID = resume.id;
    alert(resumeID);
    var restAPIMethod = "";
    // console.log(resume);
    fetch(baseUrl + 'resume/' + resumeID)
    .then(response => {
        if (response.ok) {
          restAPIMethod = "PUT";
          console.log(response.restAPIMethod);
        }
        else {
          if (response.status === 404) {
            restAPIMethod = "POST";
            console.log(response.restAPIMethod);
          }
          else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
      //.then(response => response.json())
      .then(response => {
        if (restAPIMethod !== "") {
          var url = baseUrl + ((restAPIMethod === "PUT") ? ('resume/' + resumeID) : 'resume/' + resumeID);
          return fetch(url, {
              method: restAPIMethod,
              body: JSON.stringify(newResume),
              headers: {
                "Content-Type": "application/json"
              },
              credentials: "same-origin"
          })
          .then(response => {
              if (response.ok) {
                return response;
              } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
              }
            },
            error => {
                  throw error;
            })
          .then(response => response.json())
          .then(response => updateResume(response))
          .catch(error =>  { console.log('save resume', error.message); alert('Your resume could not be saved\nError: '+error.message); });
        }
        else {
          return null;
        }
      })
    .catch(error => {
      console.log(error);
      alert(error);
      return error;
    });
};

export const fetchResume = (email) => (dispatch) => {

  var resumeID = email.split('@').join("_").split('.').join('_');
  dispatch(resumeLoading());

  return fetch(baseUrl + 'resume/' + resumeID)
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(response => dispatch(updateResume(response)))
    .catch(error => dispatch(resumeFailed(error.message)));
}


export const resumeFailed = (errmess) => ({
    type: ActionTypes.RESUME_FAILED,
    payload: errmess
});

export const resumeLoading = () => ({
  type: ActionTypes.RESUME_LOADING
});

export const updateResumeLoading = () => ({
  type: ActionTypes.UPDATE_RESUME
})
