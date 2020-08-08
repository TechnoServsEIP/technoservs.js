const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs(process.env.TS_API_TOKEN);

technoservs.Docker.start(
  "2",
  "b12f3a053e4ff8825336ab845d58e6e18f2aaf18a09e2e7cd07dcae0db7b0391"
).then(response => {
  console.log(response)
}).catch(e => {
  console.log(e)
})
