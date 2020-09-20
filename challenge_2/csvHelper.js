var json = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": 0
}

var headers = Object.keys(json)
headers = headers.join(',') + "\n"

var gettingValues = (object) => {
  var values = Object.values(object);
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === object) {
      console.log('this is an object');
      if (Array.isArray(values[i])) {
        console.log('object is array');
        for (var j = 0; j < values[i].length; j++) {
          gettingValues(values[i][j]);
        }

      } else {

      })
    }
  }
}

console.log(headers + "hello world!")