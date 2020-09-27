export const STATUS = {
  isLoading: 'isLoading',
  isSuccess: 'isSuccess',
  isError: 'isError',
};

export function requestApiAction(endpoint, actionType, options: any = {}) {
  if (options.body) {
    if (
      typeof options.body === 'object' &&
      !(options.body instanceof FormData)
    ) {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(options.body);
    }
  }

  return async (dispatch) => {
    dispatch({ type: actionType, status: STATUS.isLoading });
    await fetch(endpoint, options)
      .then(parse)
      .then(async (response) => {
        dispatch({ type: actionType, ...response, status: STATUS.isSuccess });
        return response;
      })
      .catch((error) => {
        dispatch({
          type: actionType,
          success: false,
          status: STATUS.isError,
          error,
        });
        return error;
      });
  };
}

const ERR_MES_SYS = '500 Internal Server Error';
const ERR_MES_401 = '401 Unauthorized';

async function parse(response: Response): Promise<any> {
  const httpStatusCode = response.status;
  if (httpStatusCode >= 500) {
    throw {
      success: false,
      error: {
        message: ERR_MES_SYS,
        httpStatusCode: httpStatusCode,
      },
    };
  }

  if (httpStatusCode === 401) {
    throw {
      success: false,
      error: {
        message: ERR_MES_401,
        httpStatusCode: httpStatusCode,
      },
    };
  }

  const json = await response.json();
  if (httpStatusCode < 400) {
    return {
      success: true,
      data: json.result,
    };
  } else {
    throw {
      success: false,
      error: json.error || json.Error,
    };
  }
}
