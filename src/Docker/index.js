import {
  API
} from "../api"

export default class Docker {
  constructor(token) {
    this._token = token
    this.API = new API(this._token)
  }

  list(user_id) {
    return this.API.post('/docker/list', {
      user_id: user_id
    })
  }

  create(opts) {
    return this.API.post('/docker/create', {
      user_id: opts.user_id,
      game: opts.game,
      server_name: opts.server_name
    })
  }

  stop(opts) {
    return this.API.post('/docker/stop', {
      user_id: opts.user_id,
      container_id: opts.container_id
    })
  }

  delete(opts) {
    return this.API.post('/docker/delete', {
      user_id: opts.user_id,
      container_id: opts.container_id
    })
  }

  logs(opts) {
    return this.API.post('/docker/logs', {
      user_id: opts.user_id,
      container_id: opts.container_id
    })
  }

  infos(opts) {
    return this.API.post('/docker/infos', {
      user_id: opts.user_id,
      container_id: opts.container_id
    })
  }

  update(opts) {
    return this.API.post('/docker/update', {
      user_id: opts.user_id,
      container_id: opts.container_id,
      server_name: opts.server_name
    })
  }

  playersOnline(opts) {
    return this.API.get('/docker/playersonline', {
      body: {
        user_id: opts.user_id,
        container_id: opts.container_id
      }
    })
  }
}
