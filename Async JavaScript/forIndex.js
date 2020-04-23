function findIndex(arr, callback){
    for ( var i = 0 ; i < arr.length ; i++ ){
        var r = callback(arr[i], i, arr);
        if(r){
            return i ;
            break;
        } 
    }
    if ( i === arr.length ){
        return -1 ;
    }
}

console.log(findIndex([0,1,2,3,4,5], function(num, i, arr){
    return num + i > arr[arr.length-1];
}));