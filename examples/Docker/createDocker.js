const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs(process.env.TS_API_TOKEN);

technoservs.Docker.create({
  user_id: "2",
  game: "minecraft",
  server_name: "test from library"
}).then(response => {
  console.log(response.data)
}).catch(e => {
  console.log(e)
})
