import { verifyTransactionConstants } from "../_constants";
import { verifyTransactionService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const verifyTransactionActions = {
  verifyTransaction
};

function verifyTransaction(payload) {
  return dispatch => {
    dispatch(request(payload));
    const apiModel = payload;
    verifyTransactionService.verifyTransaction(apiModel).then(
      response => {
        dispatch(success(response));
        dispatch(alertActions.success('Transaction is Valid'));
        history.push("/verification-status");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message || error));
        history.push("/verification-status");
      }
    );
  };

  function request(payload) {
    return { type: verifyTransactionConstants.VERIFY_TRANSACTION_REQUEST, payload };
  }
  function success(response) {
    return { type: verifyTransactionConstants.VERIFY_TRANSACTION_SUCCESS, response };
  }
  function failure(error) {
    return { type: verifyTransactionConstants.VERIFY_TRANSACTION_FAILURE, error };
  }
}
