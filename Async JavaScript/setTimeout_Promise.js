var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        var r = Math.random();
        resolve(r);
    }, 4000);
});

promise.then((num) => {
    console.log(num);
});