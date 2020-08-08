import Docker from "./Docker";
import { API } from "./api";

/**
 * Authentication instance
 * @example
 * const {Auth} = require('technoservs.js');
 *
 *
 const auth = new Auth('your-email', 'your-password')
 *
 * auth.login().then((response) => {
 *  console.log(response)
 * }).catch((e) => {
 *  console.log(e)
 * })
 */
export class Auth {
  /**
   *
   * @param {String} email - Email of the user
   * @param {String} pwd - Password of the user
   */
  constructor(email, pwd) {
    this._email = email;
    this._pwd = pwd;
  }

  /**
   * @return <Promise>
   */
  login() {
    return new API().post("/user/login", {
      email: this._email,
      password: this._pwd,
    });
  }
}

/**
 * Technoservs instance
 * @example
 * const {Technoservs} = require('technoservs.js')
 *
 * const ts = new Technoservs('your-token')
 */
export class Technoservs {
  constructor(token) {
    this._token = token;
    this.Docker = new Docker(this._token);
  }
}
