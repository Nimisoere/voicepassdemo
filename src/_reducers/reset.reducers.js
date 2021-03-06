import { resetProfileConstants } from "../_constants";

const initialState = { submitting: false };

export const resetProfile = (state = initialState, action) => {
  switch (action.type) {
    case resetProfileConstants.RESET_PROFILE_REQUEST:
      return {
        submitting: true,
        payload: action.payload
      };
    case resetProfileConstants.RESET_PROFILE_SUCCESS:
      return {
        success: true,
        response: action.response
      };
    case resetProfileConstants.RESET_PROFILE_FAILURE:
      return {
        error: action.error,
        failed: true
      };
    default:
      return state;
  }
};