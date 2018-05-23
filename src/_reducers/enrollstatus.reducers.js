import { enrollmentStatusConstants } from "../_constants";

const initialState = { submitting: false };

export const enrollmentStatus = (state = initialState, action) => {
  switch (action.type) {
    case enrollmentStatusConstants.ENROLLMENT_STATUS_REQUEST:
      return {
        submitting: true,
        payload: action.payload
      };
    case enrollmentStatusConstants.ENROLLMENT_STATUS_SUCCESS:
      return {
        success: true,
        response: action.response
      };
    case enrollmentStatusConstants.ENROLLMENT_STATUS_FAILURE:
      return {
        error: action.error,
        failed: true
      };
    default:
      return state;
  }
};