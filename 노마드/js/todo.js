const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY="todos"

let toDos=[];

function saveToDo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){ 
    const li=event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    saveToDo();
}


function paintToDo(newTodo){
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerText=newTodo;
        const button = document.createElement("button");
        button.innerText="X";
        button.addEventListener("click",deleteToDo);
        li.appendChild(span);
        li.appendChild(button);
        
        toDoList.appendChild(li);
}

function sayHello(item){
        console.log("this is the",item);
}

function handleTodoSubmit(event){
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value = "";
        const newToDoObj = {
                Text:newTodo,
                id:Date.now(),
        };
        toDos.push(newTodo);
        paintToDo(newTodo);
        saveToDo();
       
}

toDoForm.addEventListener("submit",handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
        const parseToDo = JSON.parse(savedToDos);
       parseToDo. forEach(paintToDo);
            
}