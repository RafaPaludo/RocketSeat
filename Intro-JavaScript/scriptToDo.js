var listElement = document.querySelector('div#app ul');
var inputElement = document.querySelector('div#app input');
var btnElement = document.querySelector('div#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos(){
    listElement.innerHTML = '';

    todos.forEach(function(todo){
        //Cria li e coloca o texto dentro
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);

        //Cria o link e define o href
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        //Cria associação do link com o item do array
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos +')');

        //Cria texto para link e o adiciona
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);

        //Adiciona item na ul
        listElement.appendChild(todoElement);
    });
}
renderTodos();


function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveLocalStorage()
}

btnElement.onclick = addTodo;


function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveLocalStorage()
}

function saveLocalStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}