import { apiUrls } from "../_constants";

export const enrollmentService = {
    enroll
};

function enroll(apiModel) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiModel)
  };

  return fetch(apiUrls.enrollUser, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText || "Oops! Something went wrong");
  }

  return response.json();
}
