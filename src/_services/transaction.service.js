import { apiUrls } from "../_constants";
import { handleResponse } from "../_helpers";

export const transactionService = {
    performTransaction
};

function performTransaction(apiModel) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiModel)
  };

  return fetch(apiUrls.performTransaction, requestOptions).then(
    handleResponse
  );
}
