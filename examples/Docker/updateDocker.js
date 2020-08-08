const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs(process.env.TS_API_TOKEN);

technoservs.Docker.update(
  "2",
  "c5b0ed645b110533246047a303293e079c00bd4265ab4bdf108755c0b95f83d3",
  "New name v2"
).then(response => {
  console.log(response)
}).catch(e => {
  console.log(e)
})
