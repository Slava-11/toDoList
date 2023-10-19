import { useApiContext } from "../../context/AppContext";
import { TodoId } from "../../types/types";

export const useDeleteTodo = () => {
  const { todos, setTodos } = useApiContext();
  const deleteTodo = (id: TodoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return deleteTodo;
};