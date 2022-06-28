# Day-2

#### TodoApp with increment,decrement butttons as well as Total Updation

- Handle Qauntity

  ```
   const handleQtyChange=(id,value)=>{
    let temp= data.map((item)=>item.id===id ? {...item,qty :  item.qty+value} : item )
    setData(temp)
  }

  ```

- Handle Total Price By Reducer :

```
    let total = data.reduce((acc, curr) => {
       return acc + curr.qty * curr.price;
     }, 0);
```

.................................

# Day-1 (functions,state,props)

### Todos

- HandleToggle
- handleDelete
- InCompleted Data Show

```
const handleToggle = (id) => {
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

```

- handleDelete

```
const handleDelete = (id) => {
// write logic later
const updatedData = todos.filter((item) => item.id !== id);
setTodos(updatedData);
};

```

- InCompleted Data Show

```
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
```
