const express = require("express");
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const app = express();
const uri = "mongodb+srv://admin:Tripitaka3@cluster0-vuo9k.mongodb.net/?retryWrites=true"
const client = new MongoClient(uri, {
  useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'client')));

// app.get("/", (req, res) => {
//   res.send({ status: 'Hello World' });
// });

client.connect(err => {
  const collection = client.db("6figures").collection("prompts");
  console.log(collection, client)
  const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`);
  });
  collection.find().toArray(function (err, result) {
    if (err) throw err
    var data = result
    app.get('/ruby', (req, res) => {
      const number = Math.round(Math.random() * 10)
      const key = "Ruby" + number
      var result = data.filter(el => Object.keys(el).includes(key))
      res.send({
        res: result[0][key]
      });
    });
    app.get('/python', (req, res) => {
      const number = Math.round(Math.random() * 10)
      const key = "Python" + number
      var result = data.filter(el => Object.keys(el).includes(key))
      res.send({
        res: result.key
      });
    });
    app.get('/js', (req, res) => {
      const number = Math.round(Math.random() * 10)
      const key = "JavaScript" + number
      var result = data.filter(el => Object.keys(el).includes(key))
      res.send({
        res: result.key
      });
    });
  })
  client.close();
});
