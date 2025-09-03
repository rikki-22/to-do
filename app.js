const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent form submission (page reload)

  const task = todoInput.value.trim();
  if (task === '') {
    alert('Please enter a task.');
    return;
  }

  addTask(task);
  todoInput.value = '';
  todoInput.focus();
});

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;

  // Toggle complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent toggling complete when deleting
    todoList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}
