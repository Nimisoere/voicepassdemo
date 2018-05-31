import { transactionConstants } from "../_constants";
import { transactionService, createProfileService } from "../_services";
import { alertActions } from "./";
import uuidv1 from "uuid/v1";
//import { history } from "../_helpers";

export const transactionActions = {
  performTransaction
};

const generateFakeRIdTid = () => {
  return {
    transactionId: uuidv1(),
    referenceId: createProfileService.getReferenceId()
  };
};

function performTransaction(payload) {
  return dispatch => {
    dispatch(request(generateFakeRIdTid()));
    transactionService.performTransaction(generateFakeRIdTid()).then(
      response => {
        dispatch(success(response));
        //dispatch(alertActions.success('Success'));
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
