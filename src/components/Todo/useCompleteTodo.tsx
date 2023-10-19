import { useApiContext } from "../../context/AppContext";
import { TodoId } from "../../types/types";

export const useCompleteTodo = () => {
  const { todos, setTodos } = useApiContext();
  const completeTodo = (id: TodoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  return completeTodo;
};
