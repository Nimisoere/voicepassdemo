import { verifyTransactionConstants } from "../_constants";

const initialState = { submitting: false };

export const verifyTransaction = (state = initialState, action) => {
  switch (action.type) {
    case verifyTransactionConstants.VERIFY_TRANSACTION_REQUEST:
      return {
        submitting: true,
        payload: action.payload
      };
    case verifyTransactionConstants.VERIFY_TRANSACTION_SUCCESS:
      return {
        success: true,
        response: action.response
      };
    case verifyTransactionConstants.VERIFY_TRANSACTION_FAILURE:
      return {
        error: action.error,
        failed: true
      };
    default:
      return state;
  }
};