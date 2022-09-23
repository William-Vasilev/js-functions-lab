fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
     const completed = todos.filter( ( todo) => todo.completed) // Complete this code
     completed.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })

    const todotitles = todos.map(todo => todo.title);
    console.log(todotitles);

  })
  .catch(function(err) { 
    console.log(err);
  });