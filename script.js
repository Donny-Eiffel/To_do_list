document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#todo-form");
    const input = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");

    // Load saved todos from localStorage
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach(todo => {
        addTodoToDOM(todo.text, todo.completed);
    });

    // Add new todo item on form submit
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== "") {
            addTodoToDOM(todoText, false);
            saveTodos();
            input.value = "";
        }
    });

    function addTodoToDOM(text, completed) {
        const li = document.createElement("li");
        li.textContent = text;

        if (completed) {
            li.classList.add("completed");
        }

        // Mark item as completed on click
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
            saveTodos();
        });

        // Add delete button to remove the item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent triggering the li click event
            li.remove();
            saveTodos();
        });
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    }

    function saveTodos() {
        const todos = [];
        todoList.querySelectorAll("li").forEach(li => {
            todos.push({
                text: li.firstChild.textContent,
                completed: li.classList.contains("completed")
            });
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }
});
