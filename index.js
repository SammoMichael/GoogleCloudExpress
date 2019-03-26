const express = require("express");
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const uri = "mongodb+srv://admin:Tripitaka3@cluster0-vuo9k.mongodb.net/?retryWrites=true"
const client = new MongoClient(uri, {
  useNewUrlParser: true
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// // var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
//   if (err) throw err

//   db.collection('mammals').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
// })

var BSearch3 = `function binarySearch(ar, el, compare_fn) {
  var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = compare_fn(el, ar[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return -m - 1;
}

function compare_number(a, b) {
  return a - b;
}
`
// Bsearch2 =  Bsearch2.replace(/(\n)+/g, '<br />');
var BSearch = `<pre>function bsearch (Arr,value){<br>var low = 0,
  high = Arr.length - 1,
  mid;
while (low <= high) {
  mid = Math.floor((low + high) / 2);
  if (Arr[mid] == value) return mid;
  else if (Arr[mid] < value) low = mid + 1;
  else high = mid - 1;
}
return -1;
}</pre>`
// app.post('/name/add', (req, res, next) => {

//   var name = {
//     prompt: `function bsearch (Arr,value){<br>var low = 0,
//   high = Arr.length - 1,
//   mid;
// while (low <= high) {
//   mid = Math.floor((low + high) / 2);
//   if (Arr[mid] == value) return mid;
//   else if (Arr[mid] < value) low = mid + 1;
//   else high = mid - 1;
// }
// return -1;
// }`
//   };

//   dbase.collection("prompt").save(BSearch, (err, result) => {
//     if (err) {
//       console.log(err);
//     }

//     res.send('name added successfully');
//   });
// });


app.use(express.static(path.join(__dirname, 'client')));


app.get("/", (req, res) => {
  res.send({ status: 'Hello World' });
});

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
    var BSearch2 = result.map(el => el.prompt)[0]
    console.log(result.map(el => el.prompt)[0])
    app.get('/express_backend', (req, res) => {
      res.send({
        express: BSearch2
      });
    });
  })
  client.close();
});


