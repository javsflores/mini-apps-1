const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('client'))
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.status(200).send();
})

app.post("/", (req, res) => {
  console.log('this is req: ', req.body.text)
  res.status(200).sendFile(path.join(__dirname + "/client/index.html"));
})

app.get("*", (req, res) => {
  res.status(200).send('hello')
})

app.listen(1010, () => {
  console.log('Listening on port')
})