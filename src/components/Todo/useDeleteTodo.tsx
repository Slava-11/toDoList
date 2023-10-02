import { useApiContext } from "../../context/AppContext";

export const useDeleteTodo = () => {
  const { todos, setTodos } = useApiContext();
  const deleteTodo = (id: number | string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return deleteTodo;
};