import { apiUrls } from "../_constants";

export const enrollmentStatusService = {
  enrollmentStatus
};

function enrollmentStatus(apiModel) {
  var url = new URL(apiUrls.getEnrollmentStatus),
    params = { referenceId: apiModel.referenceId};
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
  return fetch(url).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText || "Oops! Something went wrong");
  }

  return response.json();
}
