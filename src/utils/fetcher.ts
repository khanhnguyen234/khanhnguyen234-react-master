export function fetcher(endpoint, actionType = 'unknownAction', options = {}) {
  const fetchOption = {
    ...options,
    headers: {
      Authorization: 'token',
    },
  } as any;

  return async (dispatch) => {
    await fetch(endpoint, fetchOption)
      .then(async (response) => {
        const json = await response.json();
        dispatch({ type: actionType, data: json, success: true });
        return json;
      })
      .catch((error) => {
        dispatch({ type: actionType, data: error, success: false });
        return error;
      });
  };
}
