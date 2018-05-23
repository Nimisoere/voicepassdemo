import { deleteProfileConstants } from "../_constants";
import { deleteProfileService } from "../_services";
import { alertActions } from "./";
//import { history } from "../_helpers";

export const deleteProfileActions = {
  deleteProfile
};

function deleteProfile(payload) {
  return dispatch => {
    dispatch(request(payload));
    const apiModel = payload;
    deleteProfileService.deleteProfile(apiModel).then(
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
    return { type: deleteProfileConstants.DELETE_PROFILE_REQUEST, payload };
  }
  function success(response) {
    return { type: deleteProfileConstants.DELETE_PROFILE_SUCCESS, response };
  }
  function failure(error) {
    return { type: deleteProfileConstants.DELETE_PROFILE_FAILURE, error };
  }
}
