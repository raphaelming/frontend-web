var board = document.getElementById("board");
var spans = document.querySelectorAll('#board span');
var bTarget = spans[0];
var bTargetColor


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
