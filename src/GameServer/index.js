import {
  API
} from "../api";

export default class GameServer {
  /**
   * @param {String} token
   */
  constructor(token) {
    this._token = token;
    this.API = new API(this._token);
  }

  getProperties(data) {
    return this.API.get('/minecraft/serverproperties', {
      data
    })
  }

  updateProperties() {
    return this.API.post('/minecraft/serverproperties')
  }
}
