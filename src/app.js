// global array 
let todos = [];
let count = 0;

function addTodo(){
console.log('addTodo()');
// ref to dom object representing select list that include duration element
// duration id taken from HTML
let durationEl = document.getElementById('duration');
// get duration value   
let duration = durationEl.value;

//
let descriptionEl = document.getElementById('description');
//get description value
let description = descriptionEl.value;
console.log(duration, description);

//increment total count of items
count += 1;
// used html markup to organize output in table & to add item in array
todos.push( `<tr><th>${count}</th><td>${duration}</td><td>${description}</td></tr>` );
let todosEl = document.getElementById('todos')
// update inner html elements by joining all element in 1 long string
todosEl.innerHTML = todos.join('');
}

function clearTodos(){
console.log('clearTodos()');
todos = [];
count = 0;

let todosEl = document.getElementById('todos')
todosEl.innerHTML = '';
}