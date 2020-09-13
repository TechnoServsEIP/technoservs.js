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

  getProperties(user_id, container_id) {
    return this.API.get('/minecraft/serverproperties', {
      data: JSON.stringify({
        user_id: user_id,
        container_id: container_id
      })
    })
  }

  updateProperties() {
    return this.API.post('/minecraft/serverproperties')
  }
}
