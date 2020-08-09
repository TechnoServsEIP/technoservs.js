import {
  API
} from "../api";

export default class Docker {
  /**
   * @param {String} token
   */
  constructor(token) {
    this._token = token;
    this.API = new API(this._token);
  }

  /**
   * List the server of a specific user
   * @param {String} user_id 
   */
  list(user_id) {
    return this.API.post("/docker/list", {
      user_id: user_id,
    });
  }

  /**
   * Create a server
   * @param {String} user_id The id of the user
   * @param {String} game The game to create the server 
   * @param {String} server_name The name of your server
   */
  create(user_id, game, server_name) {
    return this.API.post("/docker/create", {
      user_id: user_id,
      game: game,
      server_name: server_name,
    });
  }

  /**
   * Stop a server
   * @param {String} user_id The id of the user
   * @param {String} container_id The id of the container
   */
  stop(user_id, container_id) {
    return this.API.post("/docker/stop", {
      user_id: user_id,
      container_id: container_id,
    });
  }

  /**
   * Delete a server
   * @param {String} user_id The id of the user
   * @param {String} container_id The id of the container
   */
  delete(user_id, container_id) {
    return this.API.post("/docker/delete", {
      user_id: user_id,
      container_id: container_id,
    });
  }

  /**
   * Get the logs of a server
   * @param {String} user_id The id of the user
   * @param {String} container_id The id of the container
   */
  logs(user_id, container_id) {
    return this.API.post("/docker/logs", {
      user_id: user_id,
      container_id: container_id,
    });
  }

  /**
   * Get the info of a server
   * @param {String} user_id The id of the user
   * @param {String} container_id The id of the container
   */
  infos(user_id, container_id) {
    return this.API.post("/docker/infos", {
      user_id: user_id,
      container_id: container_id,
    });
  }

  /**
   * Update a server
   * @param {String} user_id The id of the user
   * @param {String} container_id The id of the container to update
   * @param {String} server_name The new name of the server
   */
  update(user_id, container_id, server_name) {
    return this.API.post("/docker/update", {
      user_id: user_id,
      container_id: container_id,
      server_name: server_name,
    });
  }

  /**
   * Get the players online on a specific server
   * @param {String} user_id The id of the user
   * @param {String} container_id The id of the container
   */
  playersOnline(user_id, container_id) {
    return this.API.get("/docker/playersonline", {
      data: {
        user_id: user_id,
        container_id: container_id,
      },
    });
  }

  /**
   * Start a specific server
   * @param {String} user_id The id of the user
   * @param {String} container_id The id of the container
   */
  start(user_id, container_id) {
    return this.API.post('/docker/start', {
      user_id: user_id,
      container_id: container_id,
    })

  }
}
