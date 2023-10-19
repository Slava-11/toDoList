import React, { createContext, useContext, useEffect, useState } from "react";
//@ts-expect-error abc
import Cookies from "js-cookie";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type ApiContextType = {
  task: string;
  setTask: (task: string) => void;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  isLight: boolean;
  setIsLight: (isLight: boolean) => void;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};

type ApiProviderProps = {
  children: React.ReactNode;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const initialTodos = Cookies.get("todos");
  const initialTask = Cookies.get("task");
  const initialIsLight = Cookies.get("isLight");

  const [todos, setTodos] = useState<Todo[]>(
    initialTodos ? JSON.parse(initialTodos) : []
  );
  const [task, setTask] = useState<string>(initialTask || "");
  const [isLight, setIsLight] = useState<boolean>(initialIsLight === "true");

  useEffect(() => {
    Cookies.set("todos", JSON.stringify(todos), { expires: 7 });
  }, [todos]);

  useEffect(() => {
    Cookies.set("task", task, { expires: 7 });
  }, [task]);

  useEffect(() => {
    Cookies.set("isLight", isLight.toString(), { expires: 7 });
  }, [isLight]);

  return (
    <ApiContext.Provider
      value={{
        todos,
        setTodos,
        task,
        setTask,
        isLight,
        setIsLight,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
