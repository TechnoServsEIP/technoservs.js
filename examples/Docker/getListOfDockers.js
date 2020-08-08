const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs(process.env.TS_API_TOKEN);

technoservs.Docker.list("2").then(response => {
  console.log(response)
}).catch(e => {
  console.log(e)
})
