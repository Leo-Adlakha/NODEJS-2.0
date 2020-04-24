var p1 = new Promise(function(resolve, reject){
    reject("ERROR");
});

p1.then((data) => {
    console.log("resolved") ;
}).catch((data) => {
    console.log(data);
})
