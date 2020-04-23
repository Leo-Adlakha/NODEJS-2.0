var num = 0 ;
var intervalId = setInterval(function(){
    console.log(num++);
    if ( num === 3 ){
        clearInterval(intervalId);
    }
}, 1000);

