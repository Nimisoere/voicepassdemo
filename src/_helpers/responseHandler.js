export const handleResponse = response => {
  if (response.ok) {
    return response.json()
  }

  return response.json().then(json => {
    const error = new Error(json.responseMessage)
    return Promise.reject(Object.assign(error, { response }))
  })
};