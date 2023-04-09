const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const clearBtn = document.getElementById("clear-btn")

addBtn.addEventListener("click", () => {  
  if (todoInput.value === "") {
    alert("Please enter a todo");
  } else {
    const todoItem = document.createElement("li");
    todoItem.innerText = todoInput.value;
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

clearBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
});
