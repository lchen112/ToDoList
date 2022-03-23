export const getNumTasksRemaining = (todos) => {
  const incompleteTodos = todos && todos.filter((todo) => !todo.complete);
  return incompleteTodos.length;
};
