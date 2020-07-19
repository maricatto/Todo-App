/* Aqui é onde a mágica acontence 

    // Aqui vai buscar as informações da DIV APP
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

   // Aqui vamos fazer com que ao atualizar a página
      busque os valores localmente ou caso não tenha nada 
      ao inves de aparecer um erro, simplesmente mostrar
      só o input e o botão
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  listElement.innerHTML = '';
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}
renderTodos();

  // Função para adicionar itens e salvar localmente
              function addTodo() {
                var todoText = inputElement.value;

                todos.push(todoText);
                inputElement.value = '';
                renderTodos();
                saveToStorage();
              }

  // Ao clicar no botão adicionar 
     chamar a função adicionar
     e com isso efetivamente adicionar
                buttonElement.onclick = addTodo;


  // Função para Remover itens e gravar a alteração localmente             
              function deleteTodo(pos) {
                todos.splice(pos, 1);
                renderTodos();
                saveToStorage();
              }
  // Função para que busque o que estiver disponivel localmente  
              function saveToStorage() {
                localStorage.setItem('list_todos', JSON.stringify(todos));
              }
*/
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  listElement.innerHTML = '';
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}
renderTodos();
function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}
buttonElement.onclick = addTodo;
function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}
function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
