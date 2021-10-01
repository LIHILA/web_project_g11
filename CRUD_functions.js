const { response } = require("express");
const sql = require("./db.js");
const path = require('path');

//function - creat new item
const createNewItem = function (req, res) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const NEWI = {
        "name": req.body.Name,
        "style": req.body.style,
        "price": req.body.price,
        "size": req.body.size,
        "brand": req.body.brand,
        "photo": req.body.photo
    };
    sql.query("INSERT INTO item SET ?", NEWI, (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.sendFile(path.join(__dirname, '/html/addItemPage.html'));
        }
        res.sendFile(path.join(__dirname, '/html/myprofile.html'));
        return;
    });
};


// function to create new user
const createNewUser = function (req, res) {
// Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const newUser = {
        "firstName": req.body.FirstName,
        "lastName": req.body.LastName,
        "FavoritStyle": req.body.FavoritStyle,
        "email": req.body.Emailup.replace('@','_'),
        "pass": req.body.pwdup
    };
    sql.query("INSERT INTO user SET ?", newUser, (err, mysqlres) => {
        if (err) {
            if (err === 'ER_DUP_ENTRY') {
              res.sendFile(path.join(__dirname, '/html/contact.html'));
            }
            console.log("error: ", err);
              res.sendFile(path.join(__dirname, '/html/contact.html'));
            return;
        }
        res.sendFile(path.join(__dirname, '/html/homepage.html'));
        return;
    });
};

// function to create new contact request
const createNewContactRequest = function (req, res) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const newContactRequest = {
        "FullName": req.body.FullName,
        "Phone": req.body.Phone,
        "Email": req.body.Email,
        "Comment": req.body.Comment
    };
    sql.query("INSERT INTO contactUs SET ?", newContactRequest, (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.sendFile(path.join(__dirname, '/views/newContactRequest'));
            return;
        }
        res.sendFile(path.join(__dirname, '/views/homePage.pug'));
        return;
    });
}

const LogIn = function (req, res) {
    var loginClient = {
        "email": req.body.Emailin.replace('@','_'),
        "pass": req.body.pwdin
    };
    sql.query('SELECT * FROM user WHERE email = ? AND pass = ?', [loginClient.email, loginClient.pass], (err, result) => {
        if (err) {
            console.log("error: ", err);
            res.sendFile(path.join(__dirname, '/html/contact.html'));
            return;
        } else if (result.length > 0) {
            res.sendFile(path.join(__dirname, '/html/homepage.html'));
        } else {
            console.log("user name or password are incorrect");
            res.sendFile(path.join(__dirname, '/html/contact.html'));
            return;
        }
    });
//    } else {
//        console.log("Please enter Username and Password!");
//        response.send(('<script>alert("Please enter Username and Password!");window.location.href = "http://localhost:3000/homepage";</script>'));
//
//    }
}

function forgotPassword(EmailAddress){
    sql.query('SELECT * FROM user WHERE email = ? ',[EmailAddress], (err, result) => {
        if (err) {
            console.log("error: ", err);
            response.status(400).send({ message: "error in finding user: " + err });
            return;
        } else if (result.length > 0) {
              var newPass = Math.random().toString(36).slice(-8);
              sql.query("UPDATE user SET pass= ? WHERE email = ?", [newPass, EmailAddress], (err, mysqlres) => {
                   if (err) {
                      console.log("error: ", err);
                      response.status(400).send({ message: "error in updating user: " + err });
                      return;
                  }
              })
              console.log("New password - " + newPass);
              res.sendFile(path.join(__dirname, '/html/contact.html'));
            }
            alert("Email doesn't exists in our systems");
        })
}

function MessBox_connectIN(email,password) {
    sql.query("SELECT * FROM users where email like ? and password like ?", email + '%' , password + '%', (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            return 0;
        }
        console.log("got user by name...");
        return 1;
    });
}

function addedToCart(name,style,price,pic) {
    const newItem = {
        "name": name,
        "style": style,
        "price": price,
        "profile_pic": pic
    };
    sql.query("Insert into shoppingbag SET ?", newItem, (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            if (window.location.pathname.indexOf("Brenda") > -1) {
//            res.status(400).send({message: "error in creating item: " + err});
                res.sendFile(path.join(__dirname, 'storeBrenda'));
            }
            return;
        }
        if (window.location.pathname.indexOf("Brenda") > -1) {
            res.sendFile(path.join(__dirname, '../views/storeBrenda.pug'));
        }
        return;
    });
//    alert("Item added successfully!");
}

function removeItem(req,res) {
    const item = {
        "name": req.body.name,
        "style": req.body.style,
        "price": req.body.price,
        "profile_pic": req.body.profile_pic
    };
        sql.query("Delete from shoppingBag ?", item, (err, mysqlres) => {
            if (err) {
                console.log("error: ", err);
                res.status(400).send({message: "error in creating item: " + err});
                return;
            }
            res.send({message: "new item created successfully!"});
            return;
            alert("Item removed successfully!");
        });
}

function addedTofav(req,res) {
    const item = {
        "name": req.body.name,
        "style": req.body.style,
        "price": req.body.price,
        "profile_pic": req.body.profile_pic
    };
    sql.query("Delete from favorites ?", item, (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in creating item: " + err});
            return;
        }
        
        res.send({message: "new item created successfully!"});
        return;
        alert("Item removed successfully to favorites!");
    });
}

function checkout() {
    alert("Checked out!");
}


module.exports = {
    createNewUser,
    addedToCart,
    removeItem,
    addedTofav,
    checkout,
    MessBox_connectIN,
    createNewContactRequest,
    createNewItem,
    LogIn
}