

function addTodo(event) {

  console.log('todoStringField keyup!');


  var $field = $(event.currentTarget);
  var fieldValue = $field.val();

  if (event.keyCode !== 13 || fieldValue === "") {
    console.log('event stop')
    return false;
    // event.stopPropagation(); //이벤트 전파중지
    // return;
  }


  //엔터키가 아니면 함수 중지
  // if (event.keyCode !== 13 || todoStringField.value === "") {
  //   event.stopPropagation(); //이벤트 전파중지
  //   return;
  // }
  //

  // var newTodo = fieldValue;

  $field.val('');
  console.log('new​ todo:', fieldValue)


  // var newTodo = todoStringField.value;
  // todoStringField.value = "";
  //
  // console.log('새로운 todo:', newTodo);
  //

  //TODO. 나중에 밖으로 빼기
  var todoTemplateHtml = $('#todoTemplate').html();
  var $listDom = $('#todoList');

  $listDom.append( tmpl(todoTemplateHtml, {todo: fieldValue}) );

  // listDom.innerHTML += tmpl(todoTemplateHtml, {todo: newTodo});


  saveData($listDom.html());
}

function checkDelete(event) {
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
function saveData(html) {
  console.log('save');
  localStorage.setItem('todoHtml', html);
}
