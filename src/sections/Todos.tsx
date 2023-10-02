import { useApiContext } from "../context/AppContext";
import { Todo } from "../components/Todo/Todo";

export const Todos = () => {
  const { todos } = useApiContext();
  return (
    <div className="w-[700px] mt-[40px] mx-auto">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id}>
          {todo.text}
        </Todo>
      ))}
      {todos.length === 0 && (
        <p className="font-montserrat text-[20px] text-center text-[white] duration-[.5s] dark:text-blackColor">
          Create a task for the day
        </p>
      )}
    </div>
  );
};
