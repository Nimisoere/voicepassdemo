import { apiUrls } from "../_constants";
import { handleResponse } from "../_helpers";

export const resetProfileService = {
    resetProfile
};

function resetProfile(apiModel) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiModel)
  };

  return fetch(apiUrls.resetProfile, requestOptions).then(
    handleResponse
  ).then((text) => text.length ? JSON.parse(text) : {});
}