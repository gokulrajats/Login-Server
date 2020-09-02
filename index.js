const express = require("express")
const { createUser, loginUser } = require("./controllers/user_controller")
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser')
const port = 5000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())
const server = app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})
app.post("/api/v1/signup",createUser)
app.post("/api/v1/signin",loginUser)


