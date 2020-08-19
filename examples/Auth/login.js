const technoservs = require('../../dist/technoservs')

technoservs.login().then(response => {
  console.log(response.data)
}).catch(e => {
  console.log(e)
})
