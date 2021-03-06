import { resetProfileConstants } from "../_constants";
import { resetProfileService } from "../_services";
import { alertActions } from "./";
//import { history } from "../_helpers";

export const resetProfileActions = {
    resetProfile
};

function resetProfile(payload) {
  return dispatch => {
    dispatch(request(payload));
    const apiModel = payload;
    resetProfileService.resetProfile(apiModel).then(
      response => {
        dispatch(success(response));
        dispatch(alertActions.success('Success'));
        //history.push("/confirmation");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message || error));
      }
    );
  };

  function request(payload) {
    return { type: resetProfileConstants.RESET_PROFILE_REQUEST, payload };
  }
  function success(response) {
    return { type: resetProfileConstants.RESET_PROFILE_SUCCESS, response };
  }
  function failure(error) {
    return { type: resetProfileConstants.RESET_PROFILE_FAILURE, error };
  }
}
