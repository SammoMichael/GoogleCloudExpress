const express = require("express");
const path = require('path');

const app = express();
var BSearch2 = `function binarySearch(ar, el, compare_fn) {
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
var BSearch = `function bsearch (Arr,value){<br>var low = 0,
  high = Arr.length - 1,
  mid;
while (low <= high) {
  mid = Math.floor((low + high) / 2);
  if (Arr[mid] == value) return mid;
  else if (Arr[mid] < value) low = mid + 1;
  else high = mid - 1;
}
return -1;
}`

app.use(express.static(path.join(__dirname, 'client')));

app.get('/express_backend', (req, res) => {
  res.send({
    express: BSearch2
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
