const morgan = require('morgan')
const express = require('express')

const app = express()


app.use(express.static(__dirname + '/stylesheets'))
app.get(express.static)
app.get(express.urlencoded)


app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(3000, () => {
  console.log('server starting')
})
