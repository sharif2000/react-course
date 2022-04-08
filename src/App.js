import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo my_custom_attribute_text="progress 1" del_text="del 1" />
      <Todo my_custom_attribute_text="progress 2" del_text="del 2" />
      <Todo my_custom_attribute_text="progress 3" del_text="del 3" />
    </div>
  );
}

export default App;
