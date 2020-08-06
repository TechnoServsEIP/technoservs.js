const axios = require("axios");

const instance = axios.create({
  baseURL: "https://x2021alsablue1371139462001.northeurope.cloudapp.azure.com:9096",
  timeout: 1000,
});

export class API {
  constructor() {}

  post(path, params) {
    return instance.post(path, params)
  }
}
