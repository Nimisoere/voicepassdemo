import { enrollmentStatusConstants } from "../_constants";
import { enrollmentStatusService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const enrollmentStatusActions = {
    enrollmentStatus
};

function enrollmentStatus(payload) {
  return dispatch => {
    dispatch(request(payload));
    const apiModel = payload;
    enrollmentStatusService.enrollmentStatus(apiModel).then(
      response => {
        dispatch(success(response));
        history.push("/confirmation");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message || error));
      }
    );
  };

  function request(payload) {
    return { type: enrollmentStatusConstants.ENROLLMENT_STATUS_REQUEST, payload };
  }
  function success(response) {
    return { type: enrollmentStatusConstants.ENROLLMENT_STATUS_SUCCESS, response };
  }
  function failure(error) {
    return { type: enrollmentStatusConstants.ENROLLMENT_STATUS_FAILURE, error };
  }
}
