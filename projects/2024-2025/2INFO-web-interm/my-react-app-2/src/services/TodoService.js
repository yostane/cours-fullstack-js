const todos = [{
  id: 1,
  title: "Manger",
  completed: false,
}, {
  id: 2,
  title: "Jouer",
  completed: false,
}];

export function getAllTodos() {
  return todos;
}

export function getTodo(id) {
  return todos.find(todo => todo.id === id);
}

export function addTodo(todo) {
  todos.push(todo);
}