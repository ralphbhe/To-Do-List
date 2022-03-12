var form, todoList, button;
// variables for list

form = document.querySelector('form');
// form text DOM 
todoList = document.querySelector('ul');
// to do list
button = document.getElementById('clear');
// button for to do list DOM


var input = document.getElementById('user-todo');
// creating input for element using DOM

//adding event listener to the form field
form.addEventListener('submit', function(event) {
    event.preventDefault();

    //adding function todoMaker
    todoMaker(input.value);
    input.value = '';
})

// creating a function for the list items
var todoMaker = function(text) {
    var todo = document.createElement('li');
    todo.textContent = text;

    todoList.appendChild(todo);

    todo.style.listStyletype = 'none';

}

button.disabled = true; //setting button state to disabled
form.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector("form").value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
    }
}

button.addEventListener('click', function() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    button.disabled = true; //setting button state to disabled
form.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector("form").value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
    }
}
})