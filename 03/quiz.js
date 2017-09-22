var board = document.getElementById("board");
var spans = document.querySelectorAll('#board span');
var bTarget = spans[0];
var bTargetColor = 'black';


function changeBg(event){

  console.log(event.currentTarget);
    bTarget.style.backgroundColor = bTargetColor;
    bTargetColor = event.currentTarget.style.backgroundColor;
    event.currentTarget.style.backgroundColor = 'red';
    bTarget = event.currentTarget;
  // event.currentTarget.style.backgroundColor = 'red';
}

for(var i=0; i<spans.length; i++){
spans[i].addEventListener('click', changeBg);

  }





// var spans = document.querySelectorAll('#board span');
//
// // console.log(divs);
// var bTarget = spans[0];
// var bTargetColor = 'black';
//
// function changeBg(event) {
//
//   bTarget.style.backgroundColor = bTargetColor;
//   bTargetColor = event.currentTarget.style.backgroundColor;
//   event.currentTarget.style.backgroundColor = 'red';
//   bTarget = event.currentTarget;
// }
//
// for (var i = 0; i < spans.length; i++) {
//   if (i % 2 == 0 && parseInt(i / 4) % 2 == 0) {
//     spans[i].style.backgroundColor = 'black';
//   } else if (i % 2 == 1 && parseInt(i / 4) % 2 == 0) {
//     spans[i].style.backgroundColor = 'white';
//   } else if (i % 2 == 0 && parseInt(i / 4) % 2 == 1) {
//     spans[i].style.backgroundColor = 'white';
//   } else {
//     spans[i].style.backgroundColor = 'black';
//   }
//   spans[i].addEventListener('click', changeBg);
// }
