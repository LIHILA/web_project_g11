//import modules
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const bodyParser = require("body-parser");
const CRUD_operations = require("./CRUD_functions.js");

app.use(express.static((path.join(__dirname, '/'))));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set new engen to pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// home route
app.get('/', function(req,res){
    let advantages = [
        {advantage: 'Dynamic'},
        {advantage: 'Easy'},
        {advantage: 'Fast'},
        {advantage: 'Smart'}
    ];

    res.render('homepage', {
        variable1: 'What is Pug?',
        variable2: 'Pug is a template engine for Node and for the browser',
        advantages: advantages
    });
});

app.use(express.static('public'));


//about page route
app.get('/about',(req,res)=>{
    res.render('about');
});

//Stores page route
app.get('/stores',(req,res)=>{
    res.render('stores');
});

//communities page
app.get('/community',(req, res)=>{
    res.render('community');
})


//contactUs page
app.get('/contactUs',(req, res)=>{
    res.render('contactUs');
})


//cbrendaStore page
app.get('/storeBrenda', (req, res) => {
    res.render('storeBrenda');
});


//myProfile page
app.get('/myProfile', (req, res) => {
    res.render('myProfile');
});

//addItemPage page
app.get('/addItemPage', (req, res) => {
    res.render('addItemPage');
});

//communityEXMPLE page
app.get('/communityPage', (req, res) => {
    res.render('communityPage');
});

//connect page
app.get('/connect', (req, res) => {
    res.render('connect');
});

// set server to listen at port
app.listen(port, ()=>{
console.log('Server is renning at port'+ port)
});





app.post("/newUser", CRUD_operations.createNewUser);
app.post("/newContactRequest", CRUD_operations.createNewContactRequest);
app.post("/newItem", CRUD_operations.createNewItem);
app.post("/removeItem", CRUD_operations.removeItem);
app.post("/addToCart", CRUD_operations.addedToCart);
app.post("/addTofav", CRUD_operations.addedTofav);
app.post("/checkout", CRUD_operations.checkout);

