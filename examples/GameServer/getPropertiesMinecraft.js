const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjMsIlJvbGUiOiJhZG1pbiIsImV4cCI6MTYwMDAwNTIzMn0.enWMevn0akVQI-FXmNAiWmRbRh-BH6SsKzzuMXOpSUs");

technoservs.GameServer.getProperties(
  "3",
  "5e55b2a7968d5bb57a13f1ca2d2006c221c52901a2bf402c5af9a382ba7e39fe"
).then(response => {
  console.log(response)
}).catch(e => {
  console.log(e)
})
