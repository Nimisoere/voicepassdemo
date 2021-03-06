import { createProfileConstants } from "../_constants";
import { createProfileService } from "../_services";
import { alertActions } from "./";
//import { history } from "../_helpers";

export const createProfileActions = {
  createProfile
};

function createProfile(payload) {
  return dispatch => {
    dispatch(request(payload));
    const apiModel = {
      email: 'info@voicepass.us',
      firstName: "Voice",
      lastName: "Pass",
      phoneNumber: payload.phonenumber,
      referenceId: payload.phonenumber
    };
    createProfileService.createProfile(apiModel).then(
      response => {
        dispatch(success(response));
        dispatch(alertActions.success("Success"));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message || error));
      }
    );
  };

  function request(payload) {
    return { type: createProfileConstants.CREATE_PROFILE_REQUEST, payload };
  }
  function success(response) {
    return { type: createProfileConstants.CREATE_PROFILE_SUCCESS, response };
  }
  function failure(error) {
    return { type: createProfileConstants.CREATE_PROFILE_FAILURE, error };
  }
}
