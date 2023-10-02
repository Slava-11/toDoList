import { useApiContext } from "../../context/AppContext";

export const useAddTodo = () => {
  const { todos, setTodos, task, setTask } = useApiContext();

  const handleAddTodo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTodo = {
      id: todos.length + 1,
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  return handleAddTodo;
};
