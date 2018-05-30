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
      email: 'lawson.nimi@yahoo.com',
      firstName: "Nimi",
      lastName: "Lawson",
      phoneNumber: payload.phonenumber,
      referenceId: payload.phonenumber
    };
    console.log(apiModel)
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
