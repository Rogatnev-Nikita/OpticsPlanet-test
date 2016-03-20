var KNOWN_WAREHOUSES = ['94117', '60062'];

var form = document.getElementById('zip');

var isValidZipCode = function (code) {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(code);
};

var loadDistanceData = function (start, end) {
  // Return a new promise.
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', 'http://samo.org/op/zip/' + start + '/' + end);

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve({start: start, end: end, json: JSON.parse(req.response)});
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function () {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
};

var closest = function calculateClosest(code) {
  if (!isValidZipCode(code)) {
    return {error: true, message: 'Invalid US zip-code: ' + code};
  }

  var distances = [];
  for (var i = 0; i < KNOWN_WAREHOUSES.length; i++) {
    distances.push(loadDistanceData(KNOWN_WAREHOUSES[i], code));
  }

  Promise.all(distances).then(function (dists) {
    var min;
  });
};

form.onchange = function() {
  closest(form.value);
};