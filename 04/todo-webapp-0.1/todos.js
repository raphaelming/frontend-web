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
  // console.log('keyup event test');
  if(event.keyCode === 13){
    // console.log(getTodoString.value);
    var newTodo = getTodoString.value;
    getTodoString.value = "";
    console.log('new todo :', newTodo);
  }
})
