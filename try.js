document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("#todo-form");
    const input = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    //Load saved todos from localstorage
   const saveTodos = JSON.parse(localStorage.getItem("todos")) || [];
   saveTodos.forEach(todo =>{
     saveTodos(todo.text. todo.completed);
    });


    //Add new todo on the form submit
    form.addEventListener("submit", function(event){
        form.addEventListener("submit", function(event){
            event.preventDefault();
            const todoText = input.value.trim();
            if(todoText !== ""){
                addTodoToDOM(todoText, false);
                saveTodos();
                input.value = "";
            }
        });
    })
})