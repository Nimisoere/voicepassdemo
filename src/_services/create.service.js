import { apiUrls } from "../_constants";

export const createProfileService = {
  createProfile
};

function createProfile(apiModel) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiModel)
  };

  return fetch(apiUrls.createProfile, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response.statusText || "Oops! Something went wrong");
}
