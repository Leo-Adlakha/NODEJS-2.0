var timerId = setTimeout(function(){
    console.log("30 Seconds TimeOut!!");
}, 30000);

setTimeout(function(){
    console.log("Cancel 1st TimeOut!!!!!", timerId);
    clearTimeout(timerId);
}, 2000)