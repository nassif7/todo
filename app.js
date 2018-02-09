// DEFINE UI VARIABLES
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Event listners
form.addEventListener('submit', addTask)

// Add Task
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

//
