var board = document.getElementById("board");
var spans = document.querySelectorAll('#board span');
console.log(spans);
function changeBg(event){

  console.log(event.currentTarget);
  event.currentTarget.style.backgroundColor = 'red';
}
function removeBG(event){

}

for(var i=0; i<spans.length; i++){
spans[i].addEventListener('click', changeBg);
for(var j=0; j<spans.length; j++){
    spans[j].removeEventListener("click", changeBg, false);
}
  }

// spans[i].removeEventListener('click', changeBg)
