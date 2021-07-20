var buttonEl = document.querySelector("#save-task");
var listEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function() {
    var taskListEl = document.createElement("li");
    taskListEl.textContent = document.querySelector("");
    taskListEl.className = "task-item";
    listEl.appendChild(taskListEl);
}
buttonEl.addEventListener("click", createTaskHandler);