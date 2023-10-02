import { useApiContext } from "../context/AppContext";
import { useAddTodo } from "../hooks/useAddTodo";

export const Form = () => {
  const { task, setTask } = useApiContext();
  const handleAddTodo = useAddTodo();
  return (
    <form className="flex justify-center mt-[30px] gap-x-[20px] ">
      <input
        className="w-[100%] max-w-[400px] p-[18px] rounded-[20px] font-montserrat text-[16px] duration-[.5s] dark:bg-blackColor dark:text-white"
        type="text"
        placeholder="Your Todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="w-[100%] max-w-[100px] p-[15px] bg-[white] rounded-[20px] font-montserrat text-[16px] duration-[.5s] dark:bg-blackColor dark:text-white"
        onClick={handleAddTodo}
      >
        Submit
      </button>
    </form>
  );
};
