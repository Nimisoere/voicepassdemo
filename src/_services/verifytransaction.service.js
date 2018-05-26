import { apiUrls } from "../_constants";
import { handleResponse } from "../_helpers";

export const verifyTransactionService = {
    verifyTransaction
};

function verifyTransaction(apiModel) {
  var url = new URL(apiUrls.verifyTransaction),
    params = { transactionId: apiModel.transactionId};
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
  return fetch(url).then(handleResponse);
}
