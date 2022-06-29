# Day-3 () :

## Topics :-

- UseEffect , axios, life cycle phases

### List Of Points

#### 1.

#### 2.

#### 3.

## Points To Remember :-

- <b>useEffect :- </b>
  Basically you are telling React that your component needs to do something after render , & call it later after performing the DOM updates.

.................................

# Day-2 () :-

## Topics :-

- TodoApp , Update Object of array, fetch data from api using useEffect

### List of Points

#### 1.Fetch API using UseEffect

#### 2.Handle Qauntity

#### 3.Handle Total Price By Reducer

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

* Handle Total Price By Reducer :

```
  const TotalCost=(data)=>{
    return data.reduce((acc, curr) => {
      return acc + curr.qty * curr.price;
    }, 0);
  }

```

## Points To Remember : -

.................................

# Day-1 () :-

## Topics :-

- functions,Todos,props,states etc

### List Of Points:

#### 1.HandleToggle

#### 2.handleDelete

#### 3.InCompleted Data Show

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

## Points To Remember :-
