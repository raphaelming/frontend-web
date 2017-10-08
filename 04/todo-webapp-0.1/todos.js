//start...
//연결 확인
console.log('check todos.js');

var getTodoString = getDom('todoString');

// console.log(getTodoString);
// key 입력시 이벤트
getTodoString.addEventListener('keyup', addTodo);
