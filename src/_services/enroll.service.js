import { apiUrls } from "../_constants";
import { handleResponse } from "../_helpers";

export const enrollmentService = {
  enroll
};

function enroll(apiModel) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiModel)
  };

  return fetch(apiUrls.enrollUser, requestOptions).then(handleResponse);
}
