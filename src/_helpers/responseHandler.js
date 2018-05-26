export const handleResponse = response => {
  if (!response.ok) {
    return Promise.reject(response.statusText || "Oops! Something went wrong");
  }

  return response.json();
};
