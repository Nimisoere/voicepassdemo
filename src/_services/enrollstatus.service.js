import { apiUrls } from "../_constants";
import { handleResponse } from "../_helpers";

export const enrollmentStatusService = {
  enrollmentStatus
};

function enrollmentStatus(apiModel) {
  var url = new URL(apiUrls.getEnrollmentStatus),
    params = { referenceId: apiModel.referenceId};
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
  return fetch(url).then(handleResponse);
}