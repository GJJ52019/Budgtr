
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
      <link rel="stylesheet" href="/normalize.css">
      <link rel="stylesheet" href="/skeleton.css">
    </head>
    <body>
        <h1>Budget App</h1>
        <button onclick="window.location='http://localhost:3000/budgets/new'">New Item</button><button onclick="window.location='http://localhost:3000/budgets'">View Budgtr</button>
    </body>
</html>
`


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
    let bankaccount = 0
      budgets.forEach((budget) => {bankaccount += parseInt(budget.amount);});
        console.log(bankaccount);
        
     
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
