import { useApiContext } from "../../context/AppContext";

export const useDeleteAllTodos = () => {
  const { setTodos } = useApiContext();
  const deleteAllTodos = () => {
    setTodos([]);
  };
  return deleteAllTodos;
};