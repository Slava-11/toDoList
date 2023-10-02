import { useApiContext } from "../context/AppContext";

export const useCompleteTodo = () => {
  const { todos, setTodos } = useApiContext();
  const completeTodo = (id: string | number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  return completeTodo;
};
