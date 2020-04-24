var counter = 0;
setTimeout(() => {
    counter++ ;
    console.log(counter);
    setTimeout(() => {
        counter++ ;
        console.log(counter);
        setTimeout(() => {
            counter++ ;
            console.log(counter);   
        }, 3000);
    }, 2000);
}, 1000);