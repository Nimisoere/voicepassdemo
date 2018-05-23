import { enrollmentConstants } from "../_constants";

const initialState = { submitting: false };

export const enrollment = (state = initialState, action) => {
  switch (action.type) {
    case enrollmentConstants.ENROLLMENT_REQUEST:
      return {
        submitting: true,
        payload: action.payload
      };
    case enrollmentConstants.ENROLLMENT_REQUEST:
      return {
        success: true,
        response: action.response
      };
    case enrollmentConstants.ENROLLMENT_FAILURE:
      return {
        error: action.error,
        failed: true
      };
    default:
      return state;
  }
};