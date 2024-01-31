'use strict';
console.log(document.querySelector(".message").textContent);



document.querySelector(".check").addEventListener('click', function(){
    var val =document.querySelector(".guess").value;
    console.log(val);
    if(!val)
    {
        document.querySelector(".message").textContent="Not a Number";
    }
})

