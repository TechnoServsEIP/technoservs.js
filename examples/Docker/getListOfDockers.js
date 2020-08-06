const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs(process.env.TS_API_TOKEN);

technoservs.Docker.list().then(response => {
  console.log(response.data)
}).catch(e => {
  console.log(e)
})
