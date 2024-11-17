const express = require('express')
const app = express()
require("dotenv").config();
const mongoDB = require("./db")

const path = require('path')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json())
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static(path.join(__dirname, '../build')))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')))

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Jaopea listening on http://localhost:${port}`)
})