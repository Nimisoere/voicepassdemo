import { enrollmentConstants } from "../_constants";
import { enrollmentService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const enrollActions = {
  enroll,
  enrollVoice
};

function enroll(payload) {
  return dispatch => {
    dispatch(request(payload));
    const apiModel = payload;
    enrollmentService.enroll(apiModel).then(
      response => {
        dispatch(success(response));
        dispatch(alertActions.success("Success"));
        //history.push("/enroll-voice");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message || error));
      }
    );
  };

  function request(payload) {
    return { type: enrollmentConstants.ENROLLMENT_REQUEST, payload };
  }
  function success(response) {
    return { type: enrollmentConstants.ENROLLMENT_SUCCESS, response };
  }
  function failure(error) {
    return { type: enrollmentConstants.ENROLLMENT_FAILURE, error };
  }
}

function enrollVoice() {
  return dispatch => {
    dispatch(request());
    setTimeout(() => {
      dispatch(success());
      history.push("/enroll-voice");
    }, 1000);
  };

  function request() {
    return { type: enrollmentConstants.ENROLLMENT_REQUEST };
  }
  function success() {
    return { type: enrollmentConstants.ENROLLVOICE };
  }
}
