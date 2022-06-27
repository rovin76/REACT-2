#Todos
##HandleToggle
const handleToggle = (id) => {
// write logic later
const updatedData = todos.map((item) =>
item.id === id
? {
...item,
status: !item.status
}
: item
);
setTodos(updatedData);
};
##handleDelete
const handleDelete = (id) => {
// write logic later
const updatedData = todos.filter((item) => item.id !== id);
setTodos(updatedData);
};

## InCompleted Data Show

<AddTodo handleAdd={handleAdd} />
      <div>
        {/* TODO LIST */}
        <TodoList
          // filter out only incomplete tasks
          data={todos.filter((item) => !item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
</div>
