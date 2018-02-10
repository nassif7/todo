// DEFINE UI VARIABLES
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterA = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Event listeners Adding
form.addEventListener('submit', addTask);

// Event listeners Removing
taskList.addEventListener('click', removeTask);

// Event listeners Removing All
clearBtn.addEventListener('click', clearTasks);

// Event listeners Filtering
filterA.addEventListener('keyup', filterTasks)

// Add Task function
function addTask(e){
 if(taskInput.value === ''){
  alert('Add Task')
 }
 // create a list item li
 const li = document.createElement('li');
 // Add class to the list item
 li.className = 'collection-item';
 // Create a text node and append to li
 li.appendChild(document.createTextNode(taskInput.value));
 // Create a new link element
 const link = document.createElement('a');
 // Add class and text  
 link.className = 'delete-item secondary-content';
 link.innerHTML = '<i class="fa fa-remove"></i>';
 // Append the link to the task item
 li.appendChild(link);
 // Append the task item to the task collection
 taskList.appendChild(li);
 //clear the input field
 taskInput.value = '';
 e.preventDefault();
}

// Delete Task function
function removeTask(e){
 if(e.target.parentElement.classList.contains('delete-item')){
  if(confirm('Are you sure?'))
   e.target.parentElement.parentElement.remove();
  }
}

// Clear Tasks function
function clearTasks(e){
 // this is my was xD 
  items = document.querySelectorAll('.collection-item');
  if(confirm('Are you sure you want to clear you task list?'))
   items.forEach(item => item.remove()
  );

 // another ways
 // 1 slower
 //taskList.innerHTML = '';

 // 2 faster
 // while(taskList.firstChild){
 //  taskList.removeChild(taskList.firstChild);
 // }
}

function filterTasks(e) {
 const params = e.target.value.toLowerCase();
 items = document.querySelectorAll('.collection-item');
 items.forEach(item => item.textContent.indexOf(params) != -1 ? item.style.display = 'block' : item.style.display = 'none' );

//another ways

//1
// items = Array.from(document.querySelectorAll('.collection-item'));
// list = items.filter( item => item.textContent.indexOf(params) != -1 ? item.style.display = 'block' : item.style.display = 'none');
 
//2
//  document.querySelectorAll('.collection-item').forEach(function(task){
//   const item = task.firstChild.textContent;
//   if(item.toLowerCase().indexOf(params) != -1){
//     task.style.display = 'block';
//   } else {
//     task.style.display = 'none';
//   }
// });
}
