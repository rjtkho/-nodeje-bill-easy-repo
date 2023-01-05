const client = require("./connection/connection");
const express = require("express")
const route = require("./routes/route")
const bodyParser = require("body-parser")
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))




app.use("/", route)

app.listen(process.env.PORT||3000, function(){
    console.log("Express is running on port" +(process.env.PORT||3000))
})

client.connect();