//start...
//연결 확인
console.log('check todos.js');

var getTodoString = getDom('todoString');
var todoTemplateHtml = getDom('todoTemplate').innerHTML;
var listDom = getDom('todoList');
// console.log(getTodoString);
// key 입력시 이벤트
getTodoString.addEventListener('keyup', addTodo);
listDom.addEventListener('click', checkDelete);
listDom.innerHTML = loadData();
