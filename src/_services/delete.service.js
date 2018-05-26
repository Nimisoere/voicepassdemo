import { apiUrls } from "../_constants";
import { handleResponse } from "../_helpers";

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
