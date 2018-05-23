import { transactionConstants } from "../_constants";

const initialState = { submitting: false };

export const transaction = (state = initialState, action) => {
  switch (action.type) {
    case transactionConstants.TRANSACTION_REQUEST:
      return {
        submitting: true,
        payload: action.payload
      };
    case transactionConstants.TRANSACTION_SUCCESS:
      return {
        success: true,
        response: action.response
      };
    case transactionConstants.TRANSACTION_FAILURE:
      return {
        error: action.error,
        failed: true
      };
    default:
      return state;
  }
};