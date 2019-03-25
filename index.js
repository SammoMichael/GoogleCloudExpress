const express = require("express");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.get('/express_backend', (req, res) => {
  res.send({
    express: 'Binary Search'
  });
});
app.get("/", (req, res) => {
  res.send({ status: 'Hello World' });
});


const server = app.listen(process.env.PORT || 8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
