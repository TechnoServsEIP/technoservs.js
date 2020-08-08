const axios = require("axios");
import {
  unpackApi
} from "./utils";

/**
 * API instance
 */
export class API {
  /**
   *
   * @param {String} token - Bearer token
   */
  constructor(token) {
    this._axios = axios.create({
      baseURL: "https://x2021alsablue1371139462001.northeurope.cloudapp.azure.com:9096",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  /**
   * Post request
   * @param {String} path
   * @param {Object} body
   * @return {Promise} Pormise returned by the axios instance
   */
  post(path, body) {
    return unpackApi(this._axios.post(path, body));
  }

  get(path, params) {
    return unpackApi(this._axios.get(path, params));
  }
}
