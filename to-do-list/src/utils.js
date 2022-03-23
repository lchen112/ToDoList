export const getNumTasksRemaining = (todos) => {
  const incompleteTodos = todos && todos.filter((todo) => !todo.complete);
  return incompleteTodos && incompleteTodos.length == 1
    ? `${incompleteTodos.length} task remaining`
    : `${incompleteTodos.length} tasks remaining`;
};
