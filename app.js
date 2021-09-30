const morgan = require("morgan");
const express = require('express');
const { db, page } = require("./models");
const wiki= require('./routes/wiki.js');
const user= require('./routes/user.js');

const app = express();
app.use(morgan("dev"));



app.use(express.static(__dirname + "public"));
app.use(express.urlencoded());
app.use('/wiki', wiki);


db.authenticate()
  .then (() => {
    console.log("connected to the database");
  });

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});


app.use(function (err, req, res, next){
  console.log(err.stack);
  res.send("Error");
})


const PORT = 8080


const init = async() => {
  await db.sync({force: true})
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();




