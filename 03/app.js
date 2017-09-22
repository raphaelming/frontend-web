// var log = document.getElementById('log');
//
// // debugger
//
// console.log(log)
//
// log.innerHTML = '안녕?';

// var a = document.querySelectorAll('#log a');
//
// console.log(a);
//
// console.log(a.length, a[0], a[1]);


var div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!!";
document.body.appendChild(div); // string x

log.innerHTML = log.innerHTML + '<div style="color:red">hello</div>';
log.innerHTML += '<div style="color:red">hello</div>';
