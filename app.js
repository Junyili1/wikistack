const morgan = require("morgan")
const express = require('express')
const { db, page } = require("./models")

const app = express()
app.use(morgan("dev"))
 


app.use(express.static(__dirname + "public"))
app.get(express.urlencoded)


db.authenticate()
  .then (() => {
    console.log("connected to the database")
  })

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.use(function (err, req, res, next){
  console.log(err.stack)
  res.send("Error")
})

const PORT = 2020


const init = async() => {
  await db.sync({force: true})
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();




