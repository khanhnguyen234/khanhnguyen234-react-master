export function fetcher(endpoint, actionType = 'unknownAction') {
  return async (dispatch) => {
    await fetch(endpoint)
      .then(async (response) => {
        const json = await response.json();
        dispatch({ type: actionType, data: json, success: true });
      })
      .catch((error) => dispatch({ type: actionType, data: error, success: false }));
  };
}
