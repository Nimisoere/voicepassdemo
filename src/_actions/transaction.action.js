import { transactionConstants } from "../_constants";
import { transactionService } from "../_services";
import { alertActions } from "./";
import { history } from "../_helpers";

export const transactionActions = {
  performTransaction
};

function performTransaction(payload) {
  return dispatch => {
    dispatch(request(payload));
    const apiModel = payload;
    transactionService.performTransaction(apiModel).then(
      response => {
        dispatch(success(response));
        dispatch(alertActions.success('Success'));
        //history.push("/confirmation");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message || error));
      }
    );
  };

  function request(payload) {
    return { type: transactionConstants.TRANSACTION_REQUEST, payload };
  }
  function success(response) {
    return { type: transactionConstants.TRANSACTION_SUCCESS, response };
  }
  function failure(error) {
    return { type: transactionConstants.TRANSACTION_FAILURE, error };
  }
}
