const express = require('express');
const app = express();
const port = 3000;
const budgets = require('./models/budget.js');

app.get('/', (req,res) =>{
    const template = `    
<html>
    <head>
    <style type="text/css">
        body {
          color: steelblue;
          background-color: Grey;
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
    console.log(`Biscoff Bakery app listening on port: ${port}`)
  });
  