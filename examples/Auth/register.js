const technoservs = require('../../dist/technoservs')

technoservs.register('valentin@gmail.com', '123456').then(response => {
  console.log("resp", response)
}).catch(e => {
  console.log(e)
})
