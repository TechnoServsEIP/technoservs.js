const {
  Auth
} = require("../../dist/technoservs");

const ts = new Auth(process.env.TS_API_EMAIL, process.env.TS_API_PWD);

ts.login().then(response => {
  console.log(response.data)
}).catch(e => {
  console.log(e)
})
