const express = require('express');
const app = express();
const port = 3001;
const budgets = require('./models/budget.js');

//default load 
app.get('/', (req,res) =>{
    const template = `    
<html>
    <head>
    <style type="text/css">
        body {
          color: navy;
          background-color: lightgrey;
        }
      </style>
    </head>
    <body>
        <h1>Budget App</h1>
    </body>
</html>
`
{/* <p><a href="/bakedgoods">BakedGoods Menu</a></p>
<p>OR</p>
<p><a href="/bakedgoods/new">Create a new Treat</a></p> */}

    res.send(template);
})




app.listen(port, () => {
    console.log(`Lets see those NUMBERS on port: ${port}`)
  });
  