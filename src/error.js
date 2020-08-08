require("regenerator-runtime/runtime");

export class APIError extends Error {
  /**
   * Create a new instance of APIError
   * @param {Number} status HTTP status code of the request
   * @param {Object} data Body of the HTTP response (parsed as JSON)
   */
  constructor(status, data) {
    let message = `An error occured code ${status}`

    if (data) {
      message = data
    }
    super(message)
    this._status = status;
    this._message = message;

    Error.captureStackTrace(this, APIError)
  }

  /**
   * HTTP Status code returned by the API
   * @return {Number}
   */
  get status() {
    return this._status
  }

  /**
   * Body of the HTTP response (parsed as JSON)
   * @return {Object}
   */
  get data() {
    return this._data
  }
}
