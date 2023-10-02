import { useApiContext } from "../context/AppContext";

export const useDeleteCompletedTodos = () => {
  const { todos, setTodos } = useApiContext();
  const deleteCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };
  return deleteCompletedTodos;
};
