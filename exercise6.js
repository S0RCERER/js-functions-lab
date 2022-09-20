fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.reduce((pre,item)=>
    {
      if(item.completed )
      { 
        pre[item.userId] ? pre[item.userId] ++ : pre[item.userId] = 1;
      }
      return pre; 
},{});
    
        console.log(uncompleted);
    
  })
  .catch(function(err) { 
    console.log(err);
  });