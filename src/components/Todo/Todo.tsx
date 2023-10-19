import { useDeleteTodo } from "./useDeleteTodo";
import { useCompleteTodo } from "./useCompleteTodo";
import { ScheduleIcon } from "../../icons/ScheduleIcon";
import { CrossIcon } from "../../icons/CrossIcon";
import { CheckIcon } from "../../icons/CheckIcon";

type TodoProps = {
  children: string;
  key?: string | number; 
  todo: {
    id: number;
    completed: boolean;
  };
};

export const Todo = ({ children, key, todo }: TodoProps) => {
  const deleteTodo = useDeleteTodo();
  const completeTodo = useCompleteTodo();
  return (
    <div
      key={key}
      className="flex items-center w-[700px] bg-[white] mb-[20px] rounded-[20px] p-[6px] duration-[.5s] dark:bg-blackColor dark:text-white"
    >
      <ScheduleIcon />
      <p
        className={`ml-[15px] mr-auto font-montserrat text-[16px] ${
          todo.completed ? "line-through" : ""
        }`}
      >
        {children}
      </p>
      <div className="flex gap-x-[20px] mr-[20px]">
        <button className="w-[30px]" onClick={() => completeTodo(todo.id)}>
          <CheckIcon />
        </button>
        <button className="w-[30px]" onClick={() => deleteTodo(todo.id)}>
          <CrossIcon />
        </button>
      </div>
    </div>
  );
};
