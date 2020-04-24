var promise = new Promise(function(resolve, reject) {
    resolve(5);
  });
 
  promise.then(function(data) {
    return data * 2;
  }).then(function(data) {
    return data + 20;
  }).then(function(data) {
    console.log(data);
  });