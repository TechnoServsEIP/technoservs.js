const {
  Technoservs
} = require("../../dist/technoservs");

const technoservs = new Technoservs("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjMsIlJvbGUiOiJhZG1pbiIsImV4cCI6MTU5OTgzMDI5Nn0.Gy_-dn8mvzzxB1XM1RSwzV1GbCa3gVrkxfV9FzrMz98");

technoservs.GameServer.getProperties("3", "5e55b2a7968d5bb57a13f1ca2d2006c221c52901a2bf402c5af9a382ba7e39fe").then(response => {
  console.log(response)
}).catch(e => {
  console.log(e)
})
