function getDom(id)
{
  return document.getElementById(id);
}

function addTodo(event){
  // console.log('keyup event test');
  if(event.keyCode !== 13)
  {
    // enter key가 아닌경우 함수 중지
    event.stopPropagation();
    return;
  }
    // console.log(getTodoString.value);
    var newTodo = getTodoString.value;
    getTodoString.value = "";
    console.log('new todo :', newTodo);

    // list 생성
    var todoListDom = getDom('todoList');
    todoListDom.innerHTML += '\
    <li>\
      <button class="delete">×</button>\
      <input type="checkbox" class="toggle-checked">\
      <span class="text">'+ newTodo +'</span>\
    </li>';
}
