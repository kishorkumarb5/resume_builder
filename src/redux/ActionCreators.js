import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../common/baseUrl';

export const saveResume = (resume) => ({
    type: ActionTypes.SAVE_RESUME,
    payload: resume
});

export const putResume = (resume) => (dispatch) => {

    var resumeID = resume.Header.Email;
    return fetch(baseUrl + 'resume/' + resumeID, {
        method: "PUT",
        body: JSON.stringify(resume),
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
    .then(response => dispatch(saveResume(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchResume = (resumeID) => (dispatch) => {

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
    .then(dishes => dispatch(addResume(dishes)))
    .catch(error => dispatch(resumeFailed(error.message)));
}


export const resumeFailed = (errmess) => ({
    type: ActionTypes.RESUME_FAILED,
    payload: errmess
});

export const addResume = (resume) => ({
    type: ActionTypes.ADD_RESUME,
    payload: resume
});

export const resumeLoading = () => ({
  type: ActionTypes.RESUME_LOADING
});
