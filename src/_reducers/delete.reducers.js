import { deleteProfileConstants } from "../_constants";

const initialState = { submitting: false };

export const deleteProfile = (state = initialState, action) => {
  switch (action.type) {
    case deleteProfileConstants.DELETE_PROFILE_REQUEST:
      return {
        submitting: true,
        payload: action.payload
      };
    case deleteProfileConstants.DELETE_PROFILE_SUCCESS:
      return {
        success: true,
        response: action.response
      };
    case deleteProfileConstants.DELETE_PROFILE_FAILURE:
      return {
        error: action.error,
        failed: true
      };
    default:
      return state;
  }
};