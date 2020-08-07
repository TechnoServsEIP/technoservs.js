const axios = require("axios");

export class API {
  constructor(token) {
    this.instance = axios.create({
      baseURL: "https://x2021alsablue1371139462001.northeurope.cloudapp.azure.com:9096",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  post(path, body) {
    return this.instance.post(path, body)
  }

  get(path, params) {
    return this.instance.get(path, params)
  }
}
