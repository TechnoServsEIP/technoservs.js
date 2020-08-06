import {
  API
} from "../api"

export default class Docker {
  constructor(token) {
    this._token = token
  }

  list(user_id) {
    return new API().post('/docker/list', {
      user_id: user_id
    })
  }
}
