import {
  APIError
} from "./error";

/**
 * @ignore
 */
export function unpackApi(axiosRequest) {
  return new Promise((resolve, reject) => {
    axiosRequest
      .then((response) => {
        resolve(response.data);
      })
      .catch((e) => {
        reject(new APIError(e.response.status, e.response.data));
      });
  });
}
