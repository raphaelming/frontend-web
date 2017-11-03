function getDom(id) {
  return document.getElementById(id);
}

function addTodo(event) {

  if (event.keyCode !== 13 || getTodoString.value === "") {
    event.stopPropagation();
    return;
  }

  var newTodo = getTodoString.value;
  getTodoString.value = "";
  console.log('new todo:', newTodo);
  listDom.innerHTML += tmpl(todoTemplateHtml, {todo: newTodo});
  saveData();
}

function checkDelete(event) {
  console.log('delete');
  if(event.target.className !== 'delete') {
    return;
  }
  var deleteBtn = event.target;
  deleteBtn.parentElement.remove();
  saveData();
}

function loadData() {
  console.log('load');
  return localStorage.getItem('todoHtml');
}
function saveData() {
  console.log('save');
  localStorage.setItem('todoHtml', listDom.innerHTML);
}
