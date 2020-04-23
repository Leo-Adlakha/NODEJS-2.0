function countDown(time){
    var intervalId = setInterval(function(){
        if(!(time === 1)){
            console.log("Timer: ", (time--)-1);
        }
        else{
            console.log("Ring Ring Ring!!!");
            clearInterval(intervalId);
        }
    }, 1000);
}

countDown(3);