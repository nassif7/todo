// DEFINE UI VARIABLES
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Event listeners
form.addEventListener('submit', addTask); // add task
taskList.addEventListener('click', removeTask); // remove task
clearBtn.addEventListener('click', clearTasks); // clear tasks
filter.addEventListener('keyup', filterTasks); // filter tasks
document.addEventListener('DOMContentLoaded', getTasks); // load tasks on start

// Add Task function
function addTask(e){
 if(taskInput.value === ''){
  alert('Add Task')
 } else {
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  storeTaskInLocalStorage(taskInput.value);
  taskInput.value = '';
  e.preventDefault();
 }
}

// Get all tasks 
function getTasks() {
 let tasks;
 if(localStorage.getItem('tasks') === null) {
  tasks = [];
 } else {
  tasks = JSON.parse(localStorage.getItem('tasks'))
 }
 
 tasks.forEach(task => {
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(task));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
 });
}

// Store Task into the LS 
function storeTaskInLocalStorage(task) {
 let tasks;
 if(localStorage.getItem('tasks') === null) {
  tasks = [];
 } else {
  tasks = JSON.parse(localStorage.getItem('tasks'));
 }

 tasks.push(task);
 localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Delete Task 
function removeTask(e){
 if(e.target.parentElement.classList.contains('delete-item')){
  if(confirm('Are you sure?'))
   e.target.parentElement.parentElement.remove();
   removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

// remove task from the local storage function
function removeTaskFromLocalStorage(taskItem) {
 let tasks = JSON.parse(localStorage.getItem('tasks'));
 tasks.forEach((task, index) => {
  if (task === taskItem.textContent){
   tasks.splice(index, 1)
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
 });
}

// Clear Tasks function
function clearTasks(e){
 // this is my was xD 
  items = document.querySelectorAll('.collection-item');
  if(confirm('Are you sure you want to clear you task list?'))
   items.forEach(item => item.remove()
  );
  clearTasksFromLocalStorage();
}

// Clear LS 
function clearTasksFromLocalStorage() {
 localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
 const params = e.target.value.toLowerCase();
 items = document.querySelectorAll('.collection-item');
 items.forEach(item => item.textContent.indexOf(params) != -1 ? item.style.display = 'block' : item.style.display = 'none' );
}
