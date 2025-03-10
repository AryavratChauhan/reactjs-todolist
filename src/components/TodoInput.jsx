export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          placeholder="Enter todo..."
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}
