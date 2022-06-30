# Day-4 () :

## Topics :-

- UseEffect , axios, life cycle phases

### Study Material :-

- 1.  :
- 2.  :

## Points To Remember :-

.................................

# Day-3 () :

## Topics :-

- UseEffect , axios, life cycle phases

### Study Material :-

#### 1. Pagination :

- do inc, dec with button onClick function .

```
  const [page,setPage]=useState(1);
  const getTodos = async (page) => {
    try {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
      );
      let data = await res.json();
      setTodos(data);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    getTodos(page);
  }, [page]);


```

#### 2. Loading :

- There are two methods for loading with && operator or with ? operator

  - SetLoading :
  - Call it.

    ```
      const [loading,setLoad]=useState(false)  useState
       const getTodos= async(page)=>{
       setLoad(true)
       console.log(loading)
       let res=await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`);
       let data=await res.json();
       setTodos(data)
        setLoad(false)
         }
       useEffect(()=>{
         getTodos(page);
     },[page])

       {loading ? <h1>Loading...</h1> : <TodoItem data={todos}/>}
           or
       {loading && <h1>Loading...</h1>  }
        <TodoItem data={todos}/>

    ```

## Points To Remember :-

**useEffect :-** Basically you are telling React that your component needs to do something after render , & call it later after performing the DOM updates.

.................................

# Day-2 () :-

## Topics :-

- TodoApp , Update Object of array, fetch data from api using useEffect

### Study Material :-

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

### Study Material :-

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
