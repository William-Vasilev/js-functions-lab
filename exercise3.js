fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
     const uncompleted = todos.filter( ( todo) => ! todo.completed).map( todo => {
        return {
          userID: `${todo.userId}`,
          title: todo.title,
        };
    });
    console.log(uncompleted);
    //  uncompleted.forEach( (todo, index) => {
    //   console.log(`${todo.title} - ${todo.uncompleted}`)
    // })
  })
  .catch(function(err) { 
    console.log(err);
  });