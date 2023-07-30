const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');
const taskInput = document.getElementById('taskInput');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskItem = createTaskItem(taskText);
  pendingList.appendChild(taskItem);
  taskInput.value = '';
}

function createTaskItem(taskText) {
  const taskItem = document.createElement('li');
  taskItem.innerText = taskText;

  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.onclick = () => completeTask(taskItem);

  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.onclick = () => editTask(taskItem);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.onclick = () => deleteTask(taskItem);

  taskItem.appendChild(completeButton);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

function completeTask(taskItem) {
  taskItem.classList.toggle('completed-task');
  const parentList = taskItem.parentElement;
  const destinationList = taskItem.classList.contains('completed-task') ? completedList : pendingList;
  destinationList.appendChild(taskItem);
}

function editTask(taskItem) {
  const newTaskText = prompt('Edit the task:', taskItem.innerText);
  if (newTaskText !== null) {
    taskItem.innerText = newTaskText.trim();
  }
}

function deleteTask(taskItem) {
  if (confirm('Are you sure you want to delete this task?')) {
    taskItem.remove();
  }
}
