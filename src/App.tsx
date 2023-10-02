import "./App.css";
import { ApiProvider } from "./context/AppContext";
import { Buttons } from "./sections/Buttons";
import { ColorMode } from "./sections/ColorMode";
import { Form } from "./sections/Form";
import { Header } from "./sections/Header";
import { Todos } from "./sections/Todos";

function App() {
  return (
    <ApiProvider>
      <main className="bg-blue-950 min-h-[100vh] duration-[.5s] dark:bg-neutral-100">
        <ColorMode />
        <Header />
        <Form />
        <Buttons />
        <Todos />
      </main>
    </ApiProvider>
  );
}

export default App;
