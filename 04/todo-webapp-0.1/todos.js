//start...
//연결 확인
console.log('check todos.js');
function getDom(id)
{
  return document.getElementById(id);
}
var getTodoString = getDom('todoString');

// console.log(getTodoString);
// key 입력시 이벤트 
getTodoString.addEventListener('keyup', function(event){
  console.log('keyup event test');
})
