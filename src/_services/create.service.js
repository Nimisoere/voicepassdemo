import { apiUrls } from "../_constants";
import { handleResponse } from "../_helpers";



const setReferenceId = referenceId => {
  localStorage.setItem("ReferenceId", referenceId);
};

const getReferenceId = () => {
  return localStorage.getItem("ReferenceId");
};

const hasRefId = () => {
  const referenceId = getReferenceId();

  if (referenceId) {
    return true;
  }

  return false;
};

function createProfile(apiModel) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiModel)
  };

  return fetch(apiUrls.createProfile, requestOptions)
    .then(handleResponse)
    .then(response => {
      if (response && response.referenceId) {
        setReferenceId(response.referenceId);
      }

      return response;
    });
}


export const createProfileService = {
  createProfile,
  getReferenceId,
  hasRefId
};