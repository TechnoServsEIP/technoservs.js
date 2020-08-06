import Docker from "./Docker"
import {
  API
} from "./api"

export class Auth {
  constructor(email, pwd) {
    this._email = email;
    this._pwd = pwd;
  }

  login() {
    return new API().post('/user/login', {
      Email: this._email,
      password: this._pwd
    })
  }
}

export class Technoservs {
  constructor(token) {
    this._token = token;
    this.Docker = new Docker(this._token)
  }
}
