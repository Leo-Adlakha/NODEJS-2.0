// Require it because it is builtin with browsers but not in your systems !!
// $ npm install xmlhttprequest

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest ;
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
    if ( XHR.readyState == 4 && XHR.status == 200 ){
        console.log(XHR.responseText) ;
    }else{
        console.log("ERROR: A Problem... Sorry");
    }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();