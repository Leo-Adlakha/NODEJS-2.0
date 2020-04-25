var btn = document.querySelector('.btn');
var img = document.querySelector('.img');

btn.addEventListener("click", function(){
    var XHRHttpRequest = require('xmlhttprequest').XMLHttpRequest ;
    var XHR = new XHRHttpRequest();
    XHR.onreadystatechange = function(){
        if( XHR.readyState == 4 && XHR.status == 200 ){
            var data = JSON.parse(XHR.responseText) ;
            var url = data.message ;
            console.log(url);
            img.src = url ;
        }
    }
    XHR.open("GET", "https://dogs.ceo/api/breeds/image/random");
    XHR.send();
}); 
