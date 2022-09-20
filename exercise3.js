fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
   const uncompleted = json.filter(data => data.completed == false).map(data => {
    return {
        userId:`${data.userId}`,
        title:`${data.title}`
    }
   })
   console.log(uncompleted);
})
.catch(function(err) { 
  console.log(err);
});