// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
let list = document.getElementById("todo-list");
let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  const ol = document.getElementById("todo-list");
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const todo = arrayOfTodos[index];
    const li = document.createElement("li");
    const title = document.createTextNode(todo.title);
    li.appendChild(title);
    ol.appendChild(li);
  }
};


  //get ol by id
  //loop through the arrayOfTodos
    //create li element
    //create a textnode and make it equal to the title
    //append textnode into list into
    //append the list item into ol