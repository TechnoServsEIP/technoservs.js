const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs(process.env.TS_API_TOKEN);

technoservs.Docker.stop(
  "2",
  "e49367fee12be406b88b656b3919e7395f4584d0b4359ed59d68679743fae56c"
).then(response => {
  console.log(response)
}).catch(e => {
  console.log(e)
})
