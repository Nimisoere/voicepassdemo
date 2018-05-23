import { apiUrls } from "../_constants";

export const deleteProfileService = {
  deleteProfile
};

function deleteProfile(apiModel) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiModel)
  };

  return fetch(apiUrls.deleteProfile, requestOptions)
    .then(handleResponse)
    .then(text => (text.length ? JSON.parse(text) : {}));
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText || "Oops! Something went wrong");
  }

  return response.text();
}
