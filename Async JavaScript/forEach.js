function forEach(arr, callback){
    for ( var i = 0 ; i < arr.length ; i++ ){
        callback(arr[i], i, arr);
    }
}

print_arr = function(number, i, arr){
    console.log(number, i);
}

var numbers = [0,2,1,34,43,51] ;

forEach(numbers, print_arr) ;
