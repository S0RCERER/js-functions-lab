fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    var ans = 0; 
    const uncompleted = json.reduce((pre,item)=>
    {
      if(item.completed)
      { 
        ans++;
      }
      return ans; 
},{});
    
        console.log(ans);
    
  })
  .catch(function(err) { 
    console.log(err);
  });