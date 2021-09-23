
//constants +++++++++++++++++++++++++++++++++
const express = require('express');
const app = express();
const port = 3000;
const budgets = require('./models/budget.js');

//==========================================================================
//handling routes

//default load ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//middleware ++++++++++++++++++++++++++++++++++
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({ extended:false }));
app.use(express.static('public'))
//++++++++++++++++++++++++++++++++++++++++++++++++++++

//Index +++++++++++++++++++++++++++++++++++++++++++++++
app.get('/budgets',(req,res) =>{
    res.render('budget_index.ejs',{allbudgets:budgets});
});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//new routes++++++++++++++++++++++++++++++++++++++++++++++++
app.get('/budgets/new', (req, res) => {
    res.render('budget_new.ejs');
});


//post
app.post('/budgets', (req, res) => {
    budgets.push(req.body);
    console.log(req.body);
    res.redirect('/budgets');
});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//show route+++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.get('/budgets/:id',(req,res) =>{

    let budget = req.params.id
    res.render('budget_show.ejs',{
            budget: budgets[req.params.id]
    });
});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++


//============================================================
//listening post =============================================
app.listen(port, () => {
    console.log(`Lets see those NUMBERS on port: ${port}`)
  });
  