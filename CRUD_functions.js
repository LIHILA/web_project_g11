const response = require("express");
const sql = require("./db.js");
const path = require("path");
const fs = require('fs');
const { Script } = require("vm");

//function - creat new item
const createNewItem = function (req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const NEWI = {
    name: req.body.Name,
    style: req.body.style,
    price: req.body.price,
    size: req.body.size,
    brand: req.body.brand,
    photo: req.body.photo,
    store_id: req.body.storeid,
  };
  sql.query("INSERT INTO web_project_g11.item SET ?", NEWI, (err, mysqlres) => {
    if (err) {
      console.log("error: ", err);
      res.render(path.join(__dirname, "/views/addItemPage.pug"));
    }
    res.render(path.join(__dirname, "/views/myProfile.pug"));
    return;
  });
};

// function to create new user
const createNewUser = function (req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const newUser = {
    firstName: req.body.FirstName,
    lastName: req.body.LastName,
    FavoritStyle: req.body.FavoritStyle,
    email: req.body.Emailup.replace("@", "_"),
    pass: req.body.pwdup,
    about: req.body.about,
    photo: req.body.photo
  };
  sql.query(
    "INSERT INTO web_project_g11.user SET ?",
    newUser,
    (err, mysqlres) => {
      if (err) {
        if (err === "ER_DUP_ENTRY") {
          res.render(path.join(__dirname, "/views/connect.pug"));
        }
        console.log("error: ", err);
        res.render(path.join(__dirname, "/views/connect.pug"));
        return;
      }
      res.render(path.join(__dirname, "/views/homepage.pug"));
      return;
    }
  );
};

// function to create new contact request
const createNewContactRequest = function (req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const newContactRequest = {
    FullName: req.body.FullName,
    Phone: req.body.Phone,
    Email: req.body.Email,
    Comment: req.body.Comment,
  };
  sql.query(
    "INSERT INTO contactUs SET ?",
    newContactRequest,
    (err, mysqlres) => {
      if (err) {
        console.log("error: ", err);
        res.render(path.join(__dirname, "/views/newContactRequest"));
        return;
      }
      res.render(path.join(__dirname, "/views/homePage.pug"));
      return;
    }
  );
};

const connect = function (req, res) {
  if (req.body.action === "login") {
    LogIn(req, res);
  } else {
    forgotPassword(req, res);
  }
};

const LogIn = function (req, res) {
  var loginClient = {
    email: req.body.Emailin.replace("@", "_"),
    pass: req.body.pwdin,
  };
  sql.query(
    "SELECT * FROM user WHERE email = ? AND pass = ?",
    [loginClient.email, loginClient.pass],
    (err, result) => {
      if (err) {
        console.log("error: ", err);
        res.render(path.join(__dirname, "/views/connect"));
        return;
      } else if (result.length > 0) {

        var url = new URL ("http://localhost:8000/homepage?login")
                        res.writeHead(301,{Location: url});
                        res.end();

      } else {
        console.log("user name or password are incorrect");
        var url = new URL("http://localhost:8000/connect?login");
        res.writeHead(301, { Location: url });
        res.end();
        return;
      }
    }
  );

  //    } else {
  //        console.log("Please enter Username and Password!");
  //        response.send(('<script>alert("Please enter Username and Password!");window.location.href = "http://localhost:3000/homepage";</script>'));
  //
  //    }
};

const forgotPassword = function (req, res) {
  var client = {
      "email": req.body.Emailin.replace('@', '_')
  };
  sql.query('SELECT * FROM user WHERE email = ? ', client.email, (err, result) => {
      if (err) {
          console.log("error: ", err);
          response.status(400).send({ message: "error in finding user: " + err });
          return;
      } else if (result.length > 0) {
          var newPass = Math.random().toString().slice(-8);
          sql.query("UPDATE user SET pass= ? WHERE email = ?", [newPass, client.email], (err, mysqlres) => {
              if (err) {
                  console.log("error: ", err);
                  response.status(400).send({ message: "error in updating user: " + err });
                  return;
              }
          })
          console.log("New password - " + newPass);
          var url = new URL("http://localhost:8000/connect?forgot=" + newPass)
          res.writeHead(301, { Location: url });
          res.end();
      } else {
          res.render(path.join(__dirname, '/views/homepage.pug'));
      }
  })
}

function MessBox_connectIN(email, password) {
  sql.query(
    "SELECT * FROM users where email like ? and password like ?",
    email + "%",
    password + "%",
    (err, mysqlres) => {
      if (err) {
        console.log("error: ", err);
        return 0;
      }
      console.log("got user by name...");
      return 1;
    }
  );
}

const addedToCart = function (req, res) {
  var newItem = {};
  if (req.body.item1) {
    newItem = {
      "Name": 'Butterfly neckless',
      "style": 'Accessories',
      "price": 45,
      "size": 'M',
      "brand": 'Accessory',
      "photo": 'public/image/jul1.jpeg',
      "store_id": 'brenda@gmail.com'
    };
  } else if (req.body.item2) {
    newItem = {
      "Name": 'Two circles neckless',
      "style": 'Accessories',
      "price": 35,
      "size": 'M',
      "brand": 'Accessory',
      "photo": 'public/image/jul2.jpeg',
      "store_id": 'brenda@gmail.com'
    };
  } else if (req.body.item3) {
    newItem = {
      "Name": 'Colorful fly neckless',
      "style": 'Accessories',
      "price": 20,
      "size": 'M',
      "brand": 'Accessory',
      "photo": '/image/jul3.jpeg',
      "store_id": 'brenda@gmail.com'
    };
  } else if (req.body.item4) {
    newItem = {
      "Name": 'Heart neckless',
      "style": 'Accessories',
      "price": 50,
      "size": 'M',
      "brand": 'Accessory',
      "photo": '/image/jul4.jpeg',
      "store_id": 'brenda@gmail.com'
    };
  }

  sql.query("Insert into shoppingbag SET ?", newItem, (err, mysqlres) => {
    if (err) {
      console.log("error: ", err);
      var url = new URL("http://localhost:8000/favorites?cart=2")
      res.writeHead(301, { Location: url });
      res.end();
      return;
    }
    var url = new URL("http://localhost:8000/favorites?cart=1")
    res.writeHead(301, { Location: url });
    res.end();
    return;
  });
}


function removeItemFromCart(req, res) {
  var newItem = {};
  var deleteOne = false;
  if (req.body.checkout) {
    sql.query("TRUNCATE TABLE shoppingbag", (err, mysqlres) => {
      if (err) {
        var url = new URL("http://localhost:8000/shoppingbag?cart=4")
        res.writeHead(301, { Location: url });
        res.end();
        return;
      }
      var url = new URL("http://localhost:8000/shoppingbag?cart=3")
      res.writeHead(301, { Location: url });
      res.end();
      return;
    });
  } else if (req.body.item2) {
    newItem = {
      "Name": 'Two circles neckless',
    };
    deleteOne = true;
  } else if (req.body.item3) {
    newItem = {
      "Name": 'Colorful fly neckless',
    };
    deleteOne = true;
  } else if (req.body.item4) {
    newItem = {
      "Name": 'Heart neckless',
    };
    deleteOne = true;
  } else if (req.body.item1) {
    newItem = {
      "Name": 'Butterfly neckless',
    };
    deleteOne = true;
  }
  if (deleteOne) {
    sql.query("Delete from shoppingbag WHERE Name=?", newItem.Name, (err, mysqlres) => {
      if (err) {
        var url = new URL("http://localhost:8000/shoppingbag?cart=2")
        res.writeHead(301, { Location: url });
        res.end();
        return;
      }
      var url = new URL("http://localhost:8000/shoppingbag?cart=1")
      res.writeHead(301, { Location: url });
      res.end();
      return;
    });
  }
}


function removeItemFromFav(req, res) {
  var newItem = {};
  if (req.body.fav1) {
    newItem = {
      "Name": 'Butterfly neckless',
    };
  } else if (req.body.fav2) {
    newItem = {
      "Name": 'Two circles neckless',
    };
  } else if (req.body.fav3) {
    newItem = {
      "Name": 'Colorful fly neckless',
    };
  } else if (req.body.fav4) {
    newItem = {
      "Name": 'Heart neckless',
    };
  }
  sql.query("Delete from userfavorites WHERE Name=?", newItem.Name, (err, mysqlres) => {
    if (err) {
      var url = new URL("http://localhost:8000/favorites?fav=2")
      res.writeHead(301, { Location: url });
      res.end();
      return;
    }
    var url = new URL("http://localhost:8000/favorites?fav=1")
    res.writeHead(301, { Location: url });
    res.end();
    return;
  });
}

function addedTofav(req, res) {
  var newItem = {};
  if (req.body.fav1) {
    newItem = {
      "Name": 'Butterfly neckless',
      "style": 'Accessories',
      "price": 45,
      "size": 'M',
      "brand": 'Accessory',
      "photo": '/image/jul1.jpeg',
      "store_id": '1'
    };
  } else if (req.body.fav2) {
    newItem = {
      "Name": 'Two circles neckless',
      "style": 'Accessories',
      "price": 35,
      "size": 'M',
      "brand": 'Accessory',
      "photo": '/image/jul2.jpeg',
      "store_id": '1'
    };
  } else if (req.body.fav3) {
    newItem = {
      "Name": 'Colorful fly neckless',
      "style": 'Accessories',
      "price": 20,
      "size": 'M',
      "brand": 'Accessory',
      "photo": '/image/jul3.jpeg',
      "store_id": '1'
    };
  } else if (req.body.fav4) {
    newItem = {
      "Name": 'Heart neckless',
      "style": 'Accessories',
      "price": 50,
      "size": 'M',
      "brand": 'Accessory',
      "photo": '/image/jul4.jpeg',
      "store_id": '1'
    };
  }
  sql.query('SELECT * FROM userfavorites WHERE Name = ? ', newItem.Name, (err, result) => {
    if (err) {
      console.log("error: ", err);
      response.status(400).send({ message: "error in finding user: " + err });
      return;
    } else if (result.length > 0) {
      var url = new URL("http://localhost:8000/storeBrenda?fav=3")
      res.writeHead(301, { Location: url });
      res.end();
    } else {
      sql.query("Insert into userfavorites SET ?", newItem, (err, mysqlres) => {
        if (err) {
          console.log("error: ", err);
          var url = new URL("http://localhost:8000/storeBrenda?fav=2")
          res.writeHead(301, { Location: url });
          res.end();
          return;
        }
        var url = new URL("http://localhost:8000/storeBrenda?fav=1")
        res.writeHead(301, { Location: url });
        res.end();
        return;
      });
    }
  })
}

const calcAmount = function (req, res) {
  sql.query('SELECT sum(price) as amount FROM shoppingbag', (err, result) => {
    if (err) {
      console.log("error: ", err);
      response.status(400).send({ message: "error  " + err });
      return;
    } else {
      var resultAsString = JSON.stringify(result);
      var amount = resultAsString.substring(11, resultAsString.length - 2);
      console.log(amount)
      var url = new URL("http://localhost:8000/shoppingbag?amount=" + amount)
      res.writeHead(301, { Location: url });
      res.end();
    }
  })
}

function checkout() {
  alert("Checked out!");
}

function getMyProfile(req, res) {
  try {
    sql.query(
      "select *  from web_project_g11.item where store_id = ? ",
      req.query.id,
      (err, mysqlres) => {
        if (mysqlres.length > -1) {
          let advantages = [];
          mysqlres.forEach(row => {

            try {



              advantages.push({
                name: row.name,
                style: row.style,
                price: row.price,
                size: row.size,
                brand: row.brand,
                photo: row.photo,
              })
            }
            catch (err) {
              console.error(err)
            }


          }

          )
          res.render("myProfile", {
            advantages: advantages,
          });
        }
      }
    );
  }
  catch (err) {
    res.render("myProfile");
  }

}

function removeItemFromCart(req, res) {
  var newItem = {};
  var deleteOne = false;
  if (req.body.checkout) {
    sql.query("TRUNCATE TABLE shoppingbag", (err, mysqlres) => {
      if (err) {
        var url = new URL("http://localhost:8000/shoppingbag?cart=4")
        res.writeHead(301, { Location: url });
        res.end();
        return;
      }
      var url = new URL("http://localhost:8000/shoppingbag?cart=3")
      res.writeHead(301, { Location: url });
      res.end();
      return;
    });
  } else if (req.body.item2) {
    newItem = {
      "Name": 'Two circles neckless',
    };
    deleteOne = true;
  } else if (req.body.item3) {
    newItem = {
      "Name": 'Colorful fly neckless',
    };
    deleteOne = true;
  } else if (req.body.item4) {
    newItem = {
      "Name": 'Heart neckless',
    };
    deleteOne = true;
  } else if (req.body.item1) {
    newItem = {
      "Name": 'Butterfly neckless',
    };
    deleteOne = true;
  }
  if (deleteOne) {
    sql.query("Delete from shoppingbag WHERE Name=?", newItem.Name, (err, mysqlres) => {
      if (err) {
        var url = new URL("http://localhost:8000/shoppingbag?cart=2")
        res.writeHead(301, { Location: url });
        res.end();
        return;
      }
      var url = new URL("http://localhost:8000/shoppingbag?cart=1")
      res.writeHead(301, { Location: url });
      res.end();
      return;
    });
  }
}


function removeItemFromFav(req, res) {
  var newItem = {};
  if (req.body.fav1) {
    newItem = {
      "Name": 'Butterfly neckless',
    };
  } else if (req.body.fav2) {
    newItem = {
      "Name": 'Two circles neckless',
    };
  } else if (req.body.fav3) {
    newItem = {
      "Name": 'Colorful fly neckless',
    };
  } else if (req.body.fav4) {
    newItem = {
      "Name": 'Heart neckless',
    };
  }
  sql.query("Delete from userfavorites WHERE Name=?", newItem.Name, (err, mysqlres) => {
    if (err) {
      var url = new URL("http://localhost:8000/favorites?fav=2")
      res.writeHead(301, { Location: url });
      res.end();
      return;
    }
    var url = new URL("http://localhost:8000/favorites?fav=1")
    res.writeHead(301, { Location: url });
    res.end();
    return;
  });
}


function saveDataSession() {
  var e = document.getElementById("FavoritStyle");
  var strUser = e.options[e.selectedIndex].text;
  sessionStorage.setItem('Style', strUser)
}

function getOtherStore(req, res) {
  try {
    sql.query(
      "select *  from web_project_g11.item where store_id = ? ",
      req.query.id,
      (err, mysqlres) => {
        if (mysqlres.length > -1) {
          let advantages = [];
          mysqlres.forEach(row => {

            try {



              advantages.push({
                name: row.name,
                style: row.style,
                price: row.price,
                size: row.size,
                brand: row.brand,
                photo: row.photo,
              })
            }
            catch (err) {
              console.error(err)
            }


          }

          )
          res.render("otherStore", {
            advantages: advantages,
          });
        }
      }
    );
  }
  catch (err) {
    res.render("otherStore");
  }

}



module.exports = {
  createNewUser,
  addedToCart,
  addedTofav,
  checkout,
  MessBox_connectIN,
  createNewContactRequest,
  createNewItem,
  LogIn,
  connect,
  getMyProfile,
  removeItemFromFav,
  removeItemFromCart,
  getOtherStore,
  calcAmount,
  forgotPassword
  
};
