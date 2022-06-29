# Day-3 () :

## UseEffect,

.................................

# Day-2 () :-

## TodoApp ,UseEffect

### TodoApp , Update Object of array, fetch data from api using useEffect

List of Points

#### Fetch API using UseEffect

#### Handle Qauntity

#### Handle Total Price By Reducer

- Fetch API using UseEffect

```
const getTodos= async ()=>{
        try{
             let res=await fetch("https://jsonplaceholder.typicode.com/todos");
             let data= await res.json();
             setTodos(data)
        }
        catch(err){
            console.log("error",err)
        }
    }
   useEffect(()=>{
     getTodos()
},[])

```

- Handle Qauntity

  ```
   const handleQtyChange=(id,value)=>{
    let temp= data.map((item)=>item.id===id ? {...item,qty :  item.qty+value} : item )
    setData(temp)
  }

  ```

- Handle Total Price By Reducer :

```
  const TotalCost=(data)=>{
    return data.reduce((acc, curr) => {
      return acc + curr.qty * curr.price;
    }, 0);
  }

```

.................................

# Day-1 () :-

## functions,state,props

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
