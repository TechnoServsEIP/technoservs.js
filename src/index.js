import Docker from "./Docker";
import { API } from "./api";

/**
 * Login method
 * @param {String} email - Email of the user
 * @param {String} pwd - Password of the user
 */
export function login(email, pwd) {
  return new API().post("/user/login", {
    email: email,
    password: pwd,
  });
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
