import {
  expect
}
from 'chai'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  Auth,
  Technoservs
} from "../src/"

describe('new Auth', () => {
  it('verify the params are correctly used', () => {
    let auth = new Auth('your-email', 'your-pwd')
    expect(auth).to.not.be.null
    expect(auth._email).to.eq('your-email')
    expect(auth._pwd).to.eq('your-pwd')
  })

  it('call the api to login the client', async () => {
    let mock = new MockAdapter(axios);
    let auth = new Auth('your-email', 'your-pwd')

    mock.onPost('https://x2021alsablue1371139462001.northeurope.cloudapp.azure.com:9096/user/login').reply(200, {
      account: {
        "ID": "2",
        token: "jwt-token",
        Role: "admin"
      }
    })

    let result = await auth.login()
    expect(result).to.not.be.null
    expect(result.data.account.ID).to.equal('2')
    expect(result.data.account.token).to.equal('jwt-token')
    expect(result.data.account.Role).to.equal("admin")
  })
})

describe('new Technoservs', () => {
  it('should correctly create a technoservs instance', () => {
    let ts = new Technoservs("jwt-token")

    expect(ts).to.not.be.null
    expect(ts._token).to.equal("jwt-token")
  })
})
