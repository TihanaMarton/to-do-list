let button = document.getElementById('btn');
let inputTask = document.getElementById('input');
let taskList = document.getElementById('list');
let todoList = [];


button.addEventListener('click', () => {

  taskList.innerHTML = '';
  let taskListItem = document.createElement('li');


  taskListItem.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      if (e.target.style.textDecoration === 'line-through') {
        e.target.style.textDecoration = 'none';
      } else {
        e.target.style.textDecoration = 'line-through';
      }
    }
  });

  let closeBtn = document.createElement('button');
  closeBtn.className = 'close';

  closeBtn.addEventListener('click', (ev) => {
    if (button === taskListItem) {
      todoList.splice(0, 0, closeBtn)
    } if (ev.target === closeBtn) {
      taskListItem.style.display = 'none'
    }
  });

  taskListItem.innerText = inputTask.value
  taskListItem.append(closeBtn);

  todoList.push({ inputTask: inputTask.value, taskListItem });

  for (let i = 0; i < todoList.length; i++) {
    taskList.append(todoList[i].taskListItem);
  }
  inputTask.value = '';
});
















