const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs(process.env.TS_API_TOKEN);

technoservs.Docker.create(
  "2",
  "minecraft",
  "test from library"
).then(response => {
  console.log(response)
}).catch(e => {
  console.log(e)
})
