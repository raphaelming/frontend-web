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


// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// document.body.appendChild(div); // string x
//
// log.innerHTML = log.innerHTML + '<div style="color:red">hello</div>';
// log.innerHTML += '<div style="color:red">hello</div>';


// window.onload=function(){
//     alert("load");
// };

// window.addEventListener('load', function(){
//     console.log('load');
// });
//
// window.addEventListener('load', function(){
//     console.log('안녕??');
// });

// var log = document.getElementById('log');
// function printLog(event)
// {
//   console.log('log!!!!!!!!!!!!!!');
//   // debugger;
// }
// // log.addEventListener('mouseover', printLog)
document.addEventListener("DOMContentLoaded", function(event) {
var divs = document.querySelectorAll('#wrap div');
// console.log(divs);
function changeBg(event){
  // console.log('changeBg');
  console.log(event.currentTarget);
  event.currentTarget.style.backgroundColor = 'blue';
  // divs[i].style.backgroundColor = 'blue';

}
for(var i=0; i<divs.length; i++){
divs[i].addEventListener('click', changeBg)
}
console.log("Dom요소가 모두 로딩이 되었습니다");
});
