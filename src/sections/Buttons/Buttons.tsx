import { useDeleteAllTodos } from "./useDeleteAllTodos";
import { useDeleteCompletedTodos } from "./useDeleteCompletedTodos";
import { useApiContext } from "../../context/AppContext";
import { ProcessingIcon } from "../../icons/ProcessingIcon";
import { TrashBinIcon } from "../../icons/TrashBinIcon";

export const Buttons = () => {
  const deleteAllTodos = useDeleteAllTodos;
  const deleteCompletedTodos = useDeleteCompletedTodos;
  const { todos } = useApiContext();
  return (
    <>
      {todos.length > 0 && (
        <div className="flex justify-center items-center mt-[20px] gap-x-[20px]">
          <button
            className="w-[60px] bg-[white] p-[5px] rounded-[10px] hover:scale-[1.3] duration-[.5s] dark:bg-blackColor"
            onClick={deleteCompletedTodos()}
          >
            <ProcessingIcon />
          </button>
          <button
            className="w-[60px] bg-[white] p-[5px] rounded-[10px] hover:scale-[1.3] duration-[.5s] dark:bg-blackColor"
            onClick={deleteAllTodos()}
          >
            <TrashBinIcon />
          </button>
        </div>
      )}
    </>
  );
};
