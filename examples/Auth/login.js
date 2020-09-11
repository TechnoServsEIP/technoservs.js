const technoservs = require('../../dist/technoservs')

technoservs.login('valentin.ichkour68210@gmail.com', '').then(response => {
  console.log(response)
}).catch(e => {
  console.log(e)
})
