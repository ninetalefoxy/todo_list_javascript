//selectors


const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);

//functions

function addTodo(event){
    // prevent form fro submitting
    event.preventDefault();

    
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")

    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //CHECK MARK BUTTON
    const completedButton =  document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);

    //CHECK trash BUTTON
    const trashButton =  document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST

    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value='';

}

function deleteCheck(e){
    const item = e.target;
    //DELETE
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });       
    }


//check mark
    
    if(item.classList[0] === "completed-btn" ){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}