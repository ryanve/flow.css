const concat = require("concat")
const ok = require("assert")
const fs = require("fs")
const team = require("./team")
const read = file => fs.readFileSync(file).toString()
const all = read("flow.css")

concat(team).then(mix => {
  ok(all === mix)
  console.log("OK")
}).catch(err => {
  console.error("FILES ARE OUT OF SYNC")
  console.error("SYNC WITH npm start")
  process.exit(1)
})
