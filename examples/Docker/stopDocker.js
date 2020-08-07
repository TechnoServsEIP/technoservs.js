const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs(process.env.TS_API_TOKEN);

technoservs.Docker.stop({
  user_id: "2",
  container_id: "eaa3f413198dab40923d3bb2cba3ba8a26da95c56b126ee5a8a0054a657e2546"
}).then(response => {
  console.log(response.data)
}).catch(e => {
  console.log(e)
})
