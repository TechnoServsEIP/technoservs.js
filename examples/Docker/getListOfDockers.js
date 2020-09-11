const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs("cCI6MTU5OTgzMDE1NH0.kxZz7ZHkm9AwEpVQEBIN1axTWuVwMXDjj-GIs6bERzs");

technoservs.Docker.list("3").then(response => {
  console.log(response)
}).catch(e => {
  console.log(e)
})
