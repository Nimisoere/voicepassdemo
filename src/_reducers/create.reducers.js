import { createProfileConstants } from "../_constants";

const initialState = { submitting: false };

export const createProfile = (state = initialState, action) => {
  switch (action.type) {
    case createProfileConstants.CREATE_PROFILE_REQUEST:
      return {
        submitting: true,
        payload: action.payload
      };
    case createProfileConstants.CREATE_PROFILE_SUCCESS:
      return {
        success: true,
        response: action.response
      };
    case createProfileConstants.CREATE_PROFILE_FAILURE:
      return {
        error: action.error,
        failed: true
      };
    default:
      return state;
  }
};
