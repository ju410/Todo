const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];
const TODOS_KEY = "todos";

function saveTodo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));

}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    // console.log(typeof(li.id));
    saveTodo();
}

function paintTodo(newTodo){
    const addli = document.createElement("li");
    addli.id = newTodo.id;
   
    const addspan = document.createElement("span");
    addspan.innerText = newTodo.text;
    
    const btn = document.createElement("button");
    btn.innerText = "X";
    
    btn.addEventListener("click",deleteTodo);
    addli.appendChild(addspan);
    addli.appendChild(btn);
    todoList.appendChild(addli);
}

function handleToDOSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}
todoForm.addEventListener("submit",handleToDOSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
