const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const bodyParser = require("body-parser");
const CRUD_operations = require("./CRUD_functions.js");
const newJS = require("./newJS.js");



app.use(express.static((path.join(__dirname, '/'))));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set new engen to pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// homePage route
app.get('/', function(req,res){
    res.render('homepage');
});

app.get('/homepage', (req, res) => {
    res.render('homepage');
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
app.get('/storeOther', (req, res) => {
	if(!req.query.id )
    {
       return res.render('homepage');
    }
	var x = CRUD_operations.getOtherStore(req,res);
});


app.get('/myProfile', (req, res) => {
	if(!req.query.id )
    {
       return res.render('homepage');
    }
	var x = CRUD_operations.getMyProfile(req,res);
	
    
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

//shoppingbag page

// app.get('/shoppingbag', (req, res) => {
//     res.render('shoppingbag');
// });

app.get('/shoppingbag(\\?amount)?', (req, res) => {
    if (req.query.amount || req.query.cart) {
        console.log("y")
        res.render('shoppingbag');
    } else {
        console.log("x")
        CRUD_operations.calcAmount(req,res);
    }
});

//favorites page
app.get('/favorites', (req, res) => {
    res.render('favorites');
});


// set server to listen at port
app.listen(port, ()=>{
console.log('Server is renning at port'+ port)
});






app.post("/newUser", CRUD_operations.createNewUser);
app.post("/newContactRequest", CRUD_operations.createNewContactRequest);
app.post("/newItem", CRUD_operations.createNewItem);
app.post("/connect", CRUD_operations.connect);
app.post("/removeItemFromCart", CRUD_operations.removeItemFromCart);
app.post("/removeItemFromFav", CRUD_operations.removeItemFromFav);
app.post("/addTofav", CRUD_operations.addedTofav);
app.post("/addToCart", CRUD_operations.addedToCart);
app.post("/getMyProfile", CRUD_operations.getMyProfile);
app.post("/getOtherStore", CRUD_operations.getOtherStore);
