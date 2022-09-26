fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
    const totalCompleted = todos.reduce( (total, todo) => 
          todo.completed ? total+1 : total
     ,0
     )
     console.log(totalCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });