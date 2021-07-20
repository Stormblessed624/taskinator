var formEl = document.querySelector("#task-form");
var listEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";    
    listItemEl.textContent = "a";
    listEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);