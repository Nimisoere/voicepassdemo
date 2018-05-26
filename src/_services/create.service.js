import { apiUrls } from "../_constants";
import { handleResponse } from "../_helpers";

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