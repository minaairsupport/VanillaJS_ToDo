// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

// Functions

function addToDo(event) {
  event.preventDefault();
  // what we trying to acheive here
  // <div class="todo">
  //<li> todo text from input</li>
  // <button> deleted</button>
  // <button> checked</button>
  //</div>
  console.log('event ', event);
  // ToDo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // ToDo li
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');
  todoItem.innerText = todoInput.value;

  // add to the main div
  todoDiv.appendChild(todoItem);

  // ToDo checked button
  const checkedButton = document.createElement('button');
  checkedButton.innerHTML = '<i class="fa-solid fa-check"/>';
  checkedButton.classList.add('check-btn');

  // add to the main div
  todoDiv.appendChild(checkedButton);

  // ToDo checked button
  const trashButton = document.createElement('button');
  trashButton.classList.add('trash-btn');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';

  // add to the main div
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList.contains('fa-trash')) {
    const todoItem = item.parentElement.parentElement;
    todoItem.remove();
  }
  if (item.classList.contains('fa-check')) {
    const todoItem = item.parentElement.parentElement;
    todoItem.classList.toggle('completed');
  }
}
